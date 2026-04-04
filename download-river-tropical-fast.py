#!/usr/bin/env python3
"""
Quick download images for fish-river-tropical species from Wikimedia Commons.
"""

import os
import re
import sys
import time
import urllib.request
import json
from pathlib import Path

OUTPUT_DIR = 'assets/images/fish-river-tropical'
os.makedirs(OUTPUT_DIR, exist_ok=True)

def get_species():
    """Extract species from fish-river-tropical.js"""
    species = {}
    with open('fish-river-tropical.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    block_pattern = r"\{\s*id:\s*'([^']+)'[^}]*?latin_name:\s*'([^']+)'[^}]*?\}"
    matches = re.findall(block_pattern, content, re.DOTALL)
    for species_id, latin_name in matches:
        species[species_id] = latin_name
    
    return species

def search_wikimedia(query):
    """Search Wikimedia Commons for images."""
    search_url = f"https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=5&gsrsearch={query.replace(' ', '%20')}&prop=imageinfo&iiprop=url&iiurlwidth=640"
    
    try:
        req = urllib.request.Request(
            search_url,
            headers={'User-Agent': 'FishImageDownloader/1.0'}
        )
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode())
        
        pages = data.get('query', {}).get('pages', {})
        for page_id, page_data in pages.items():
            if 'imageinfo' in page_data and len(page_data['imageinfo']) > 0:
                img_info = page_data['imageinfo'][0]
                if 'thumburl' in img_info:
                    return img_info['thumburl'], img_info.get('url', '')
    except Exception as e:
        print(f"  Search error: {e}")
    
    return None, None

def download_image(url, output_path):
    """Download image from URL."""
    try:
        req = urllib.request.Request(
            url,
            headers={'User-Agent': 'FishImageDownloader/1.0'}
        )
        with urllib.request.urlopen(req, timeout=15) as response:
            data = response.read()
        
        with open(output_path, 'wb') as f:
            f.write(data)
        
        size = len(data) // 1024
        print(f"  ✓ Downloaded ({size}KB)")
        return True
    except Exception as e:
        print(f"  ✗ Download error: {e}")
        return False

def main():
    species = get_species()
    print(f"Found {len(species)} species to process")
    
    success = 0
    skipped = 0
    failed = 0
    
    for i, (species_id, latin_name) in enumerate(species.items(), 1):
        output_path = os.path.join(OUTPUT_DIR, f"{species_id}.jpg")
        
        # Skip if already exists
        if os.path.exists(output_path):
            print(f"[{i}/{len(species)}] {species_id} - already exists")
            skipped += 1
            continue
        
        print(f"\n[{i}/{len(species)}] {species_id} ({latin_name})")
        
        # Search for image
        thumb_url, full_url = search_wikimedia(latin_name)
        
        if thumb_url:
            print(f"  Found: {thumb_url}")
            if download_image(thumb_url, output_path):
                success += 1
                time.sleep(0.5)  # Be polite to the server
                continue
        
        # Try with "fish" suffix
        thumb_url, full_url = search_wikimedia(f"{latin_name} fish")
        if thumb_url:
            print(f"  Found (with fish): {thumb_url}")
            if download_image(thumb_url, output_path):
                success += 1
                time.sleep(0.5)
                continue
        
        print(f"  ✗ No image found")
        failed += 1
        time.sleep(0.5)
    
    print(f"\n{'='*50}")
    print(f"✓ Downloaded: {success}")
    print(f"⊘ Skipped (exists): {skipped}")
    print(f"✗ Failed: {failed}")
    print(f"📁 Output: {OUTPUT_DIR}")

if __name__ == '__main__':
    main()
