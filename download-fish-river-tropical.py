#!/usr/bin/env python3
"""
Download images for river tropical fish (freshwater) species.
Uses Wikimedia Commons API with thumbnail URLs.

Usage:
    python3 download-fish-river-tropical.py              # Download all species
    python3 download-fish-river-tropical.py --start 50   # Start from item 50
"""

import os
import re
import sys
import time
import urllib.request
import json
from pathlib import Path

def get_species_from_file():
    """Extract species IDs and latin names from fish-river-tropical.js"""
    species = {}
    with open('/Users/svetik/Projects/bird-fish-h/fish-river-tropical.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all species blocks
    block_pattern = r"\{\s*id:\s*'([^']+)'[^}]*?latin_name:\s*'([^']+)'[^}]*?\}"
    
    matches = re.findall(block_pattern, content, re.DOTALL)
    for species_id, latin_name in matches:
        species[species_id] = latin_name
    
    return species

def search_wikimedia_commons(query):
    """Search Wikimedia Commons for images using thumbnail API."""
    search_url = f"https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=5&gsrsearch={query.replace(' ', '%20')}&prop=imageinfo&iiprop=url&iiurlwidth=640"

    try:
        req = urllib.request.Request(
            search_url,
            headers={'User-Agent': 'RiverTropicalFishImageDownloader/1.0 (educational project)'}
        )
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode())

        pages = data.get('query', {}).get('pages', {})
        for page_id, page_data in pages.items():
            if 'imageinfo' in page_data and len(page_data['imageinfo']) > 0:
                img_info = page_data['imageinfo'][0]
                if 'thumburl' in img_info:
                    return img_info['thumburl']
                elif 'url' in img_info:
                    return img_info['url']
    except Exception as e:
        pass

    return None

def download_image(url, output_path):
    """Download an image from URL to the specified path."""
    try:
        req = urllib.request.Request(
            url,
            headers={'User-Agent': 'Mozilla/5.0 (compatible; RiverTropicalFishImageDownloader/1.0)'}
        )
        with urllib.request.urlopen(req, timeout=90) as response:
            with open(output_path, 'wb') as f:
                f.write(response.read())
        return True
    except Exception as e:
        print(f"  Error downloading: {e}")
        return False

def main():
    output_dir = Path('/Users/svetik/Projects/bird-fish-h/assets/images/fish-river-tropical')
    output_dir.mkdir(parents=True, exist_ok=True)

    # Parse command line arguments
    start_index = 0
    
    i = 1
    while i < len(sys.argv):
        if sys.argv[i] == '--start':
            if i + 1 < len(sys.argv):
                start_index = int(sys.argv[i + 1])
                i += 1
        i += 1

    species = get_species_from_file()
    total = len(species)
    success_count = 0
    rate_limit_delay = 10  # seconds between requests

    print(f"Downloading images for {total} river tropical fish (freshwater) species...")
    print(f"Output directory: {output_dir}")
    if start_index > 0:
        print(f"Starting from item {start_index}...")
    print("-" * 60)

    # Convert to list
    species_list = list(species.items())
    
    # Slice if start_index specified
    if start_index > 0:
        species_list = species_list[start_index:]
    
    for i, (species_id, latin_name) in enumerate(species_list, start=start_index):
        print(f"[{i + 1}/{total}] Processing {species_id} ({latin_name})...")

        output_path = output_dir / f"{species_id}.jpg"

        # Skip if already exists
        if output_path.exists():
            print(f"  ✓ Already exists, skipping...")
            success_count += 1
            continue

        # Search using latin name first, then common name
        image_url = search_wikimedia_commons(latin_name)

        if not image_url:
            # Try with common name (convert id to readable format)
            common_name = species_id.replace('-', ' ').title()
            image_url = search_wikimedia_commons(common_name)

        if image_url:
            print(f"  Downloading...")
            if download_image(image_url, output_path):
                print(f"  ✓ Downloaded successfully!")
                success_count += 1
            else:
                print(f"  ✗ Download failed")
        else:
            print(f"  ✗ No image found")

        # Delay to avoid rate limiting
        time.sleep(rate_limit_delay)

    print("-" * 60)
    print(f"Completed: {success_count}/{total} images downloaded")
    print(f"Images saved to: {output_dir}")

if __name__ == '__main__':
    main()
