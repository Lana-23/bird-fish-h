#!/usr/bin/env python3
"""
Download remaining Mediterranean fish species images.
Uses proper thumbnail URLs to comply with Wikimedia robot policy.
"""

import os
import re
import time
import urllib.request
import json
from pathlib import Path

# Remaining species that need images
remaining_species = [
    'swordfish', 'blacktail', 'painted-comber', 'european-seabass', 
    'lebranche-seabass', 'atlantic-bonito', 'yellowfin-tuna', 'bluefin-tuna',
    'bullet-tuna', 'frigate-tuna', 'pompano-dolphinfish', 'greater-baracuda',
    'european-baracuda', 'yellowmouth-baracuda', 'horse-mackerel',
    'mediterranean-horse-mackerel', 'blue-runner', 'leerfish', 'pompano',
    'common-pandora', 'red-porgy', 'sand-steendbras', 'striped-seabream',
    'peacock-wrasse', 'rainbow-wrasse', 'ornate-wrasse', 'cuckoo-wrasse',
    'ballan-wrasse', 'goldsinny-wrasse', 'black-wrasse', 'five-spotted-wrasse',
    'stem-toothed-wrasse', 'zebra-wrasse', 'marseille-wrasse'
]

def get_wikimedia_thumbnail(title, width=640):
    """Get proper thumbnail URL from Wikimedia Commons."""
    # First get the image info
    search_url = f"https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=3&gsrsearch={title.replace(' ', '%20')}&prop=imageinfo&iiprop=url&iiurlwidth={width}"
    
    try:
        req = urllib.request.Request(
            search_url,
            headers={'User-Agent': 'MediterraneanFishImageDownloader/3.0 (educational project)'}
        )
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode())
            
        pages = data.get('query', {}).get('pages', {})
        for page_id, page_data in pages.items():
            if 'imageinfo' in page_data and len(page_data['imageinfo']) > 0:
                img_info = page_data['imageinfo'][0]
                # Use the thumburl which complies with robot policy
                if 'thumburl' in img_info:
                    return img_info['thumburl']
    except Exception as e:
        pass
    
    return None

def download_image(url, output_path):
    """Download an image from URL to the specified path."""
    try:
        req = urllib.request.Request(
            url,
            headers={'User-Agent': 'Mozilla/5.0 (compatible; MediterraneanFishImageDownloader/3.0)'}
        )
        with urllib.request.urlopen(req, timeout=30) as response:
            with open(output_path, 'wb') as f:
                f.write(response.read())
        return True
    except Exception as e:
        print(f"  Error downloading image: {e}")
        return False

def main():
    output_dir = Path('/Users/svetik/Projects/bird-fish-h/images/mediterranean-fish')
    output_dir.mkdir(parents=True, exist_ok=True)
    
    success_count = 0
    total = len(remaining_species)
    rate_limit_delay = 3  # seconds between requests
    
    print(f"Downloading remaining {total} Mediterranean fish species images...")
    print(f"Output directory: {output_dir}")
    print("-" * 60)
    
    for species_id in remaining_species:
        print(f"[{success_count + 1}/{total}] Processing {species_id}...")
        
        output_path = output_dir / f"{species_id}.jpg"
        
        # Skip if already exists
        if output_path.exists():
            print(f"  ✓ Already exists, skipping...")
            success_count += 1
            continue
        
        # Convert species ID to search terms
        search_title = species_id.replace('-', ' ').title()
        
        image_url = get_wikimedia_thumbnail(search_title)
        
        if image_url:
            print(f"  Found: {search_title}")
            print(f"  Downloading thumbnail...")
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
    print(f"Completed: {success_count}/{total} images downloaded in this batch")
    print(f"Images saved to: {output_dir}")

if __name__ == '__main__':
    main()
