#!/usr/bin/env python3
"""
Download only missing images for tropical saltwater fish.
Skips species that already have images downloaded.

Usage:
    python3 download-missing-saltwater.py
    python3 download-missing-saltwater.py --delay 5  # Custom delay between requests
"""

import os
import re
import sys
import time
import urllib.request
import json
from pathlib import Path

def get_species_from_file():
    """Extract species IDs and latin names from fish-tropical.js"""
    species = {}
    with open('/Users/svetik/Projects/bird-fish-h/fish-tropical.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all species blocks
    block_pattern = r"\{\s*id:\s*'([^']+)'[^}]*?latin_name:\s*'([^']+)'[^}]*?\}"
    
    matches = re.findall(block_pattern, content, re.DOTALL)
    for species_id, latin_name in matches:
        species[species_id] = latin_name
    
    return species

def get_existing_images():
    """Get set of species that already have images"""
    img_dir = Path('/Users/svetik/Projects/bird-fish-h/assets/images/fish-tropical')
    if not img_dir.exists():
        return set()
    
    # Get all .jpg filenames without extension
    existing = {f.stem for f in img_dir.glob('*.jpg')}
    return existing

def search_wikimedia_commons(query):
    """Search Wikimedia Commons for images using thumbnail API."""
    search_url = f"https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=5&gsrsearch={query.replace(' ', '%20')}&prop=imageinfo&iiprop=url&iiurlwidth=640"

    try:
        req = urllib.request.Request(
            search_url,
            headers={'User-Agent': 'MissingSaltwaterFishDownloader/1.0 (educational project)'}
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
            headers={'User-Agent': 'Mozilla/5.0 (compatible; MissingSaltwaterFishDownloader/1.0)'}
        )
        with urllib.request.urlopen(req, timeout=90) as response:
            with open(output_path, 'wb') as f:
                f.write(response.read())
        return True
    except Exception as e:
        print(f"  ✗ Error: {e}")
        return False

def main():
    output_dir = Path('/Users/svetik/Projects/bird-fish-h/assets/images/fish-tropical')
    output_dir.mkdir(parents=True, exist_ok=True)

    # Parse command line arguments
    custom_delay = None
    for i in range(1, len(sys.argv)):
        if sys.argv[i] == '--delay' and i + 1 < len(sys.argv):
            custom_delay = float(sys.argv[i + 1])

    # Get all species and existing images
    all_species = get_species_from_file()
    existing_images = get_existing_images()
    
    # Filter to only missing species
    missing_species = {
        species_id: latin_name 
        for species_id, latin_name in all_species.items() 
        if species_id not in existing_images
    }
    
    total = len(missing_species)
    success_count = 0
    rate_limit_delay = custom_delay if custom_delay is not None else 8  # seconds between requests

    print("=" * 70)
    print("DOWNLOAD MISSING SALTWATER TROPICAL FISH IMAGES")
    print("=" * 70)
    print(f"Total species in database: {len(all_species)}")
    print(f"Existing images: {len(existing_images)}")
    print(f"Missing images: {total}")
    print(f"Output directory: {output_dir}")
    print(f"Delay between requests: {rate_limit_delay}s")
    print("-" * 70)
    print()

    if total == 0:
        print("✅ All species already have images!")
        return

    # Convert to list for iteration
    species_list = list(missing_species.items())
    
    for i, (species_id, latin_name) in enumerate(species_list, start=1):
        print(f"[{i}/{total}] {species_id} ({latin_name})")

        output_path = output_dir / f"{species_id}.jpg"

        # Double-check file doesn't exist (shouldn't happen but safety check)
        if output_path.exists():
            print(f"  ✓ Already exists, skipping...")
            success_count += 1
            continue

        # Search using latin name first
        image_url = search_wikimedia_commons(latin_name)

        if not image_url:
            # Try with common name (convert id to readable format)
            common_name = species_id.replace('-', ' ').title()
            image_url = search_wikimedia_commons(common_name)

        if image_url:
            if download_image(image_url, output_path):
                print(f"  ✓ Downloaded successfully!")
                success_count += 1
            else:
                print(f"  ✗ Download failed")
        else:
            print(f"  ✗ No image found")

        # Delay to avoid rate limiting (except for last item)
        if i < total:
            time.sleep(rate_limit_delay)

    print()
    print("=" * 70)
    print(f"COMPLETED: {success_count}/{total} images downloaded")
    print(f"Failed or not found: {total - success_count}")
    print(f"Images saved to: {output_dir}")
    print("=" * 70)

if __name__ == '__main__':
    main()
