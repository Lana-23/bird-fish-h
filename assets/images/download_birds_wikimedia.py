#!/usr/bin/env python3
"""
Script to download tropical bird images from Wikimedia Commons
Uses Commons API with proper search and user agent
Usage: python3 download_birds_wikimedia.py
"""

import requests
import time
from pathlib import Path
import urllib.parse

# Output directory
OUTPUT_DIR = Path(__file__).parent / 'birds-tropical'
OUTPUT_DIR.mkdir(exist_ok=True)

# Session for connection pooling
session = requests.Session()
session.headers.update({
    'User-Agent': 'BirdTracker/1.0 (https://github.com/bird-tracker; contact: birdtracker@example.com)',
    'From': 'birdtracker@example.com'
})

# List of tropical bird IDs with search terms
BIRDS_TO_DOWNLOAD = [
    # Already have these - will skip
    ('scarlet-macaw', 'Scarlet macaw'),
    ('quetzal', 'Resplendent quetzal'),
    ('paradise-bird', 'Bird of paradise'),
    ('hummingbird', 'Ruby-throated hummingbird'),
    ('toucan', 'Toco toucan'),
    ('flamingo', 'Greater flamingo'),
    ('pelican', 'Great white pelican'),
    ('penguin', 'Emperor penguin'),
    ('blue-macaw', 'Blue-and-yellow macaw'),
    ('chestnut-macaw', 'Chestnut-fronted macaw'),
    ('blue-fronted-amazon', 'Blue-fronted amazon'),
    ('mealy-amazon', 'Mealy amazon'),
    ('yellow-crowned-amazon', 'Yellow-crowned amazon'),
    ('military-macaw', 'Military macaw'),
    ('green-macaw', 'Great green macaw'),
    ('cockatoo-gang-gang', 'Gang-gang cockatoo'),
    ('lori-rainbow', 'Rainbow lorikeet'),
    ('lovebird-masked', 'Masked lovebird'),
    ('pionus-maximilian', "Maximilian's pionus"),
    
    # Need to download
    ('cockatoo-umbrella', 'Umbrella cockatoo'),
    ('cockatoo-sulphur', 'Sulphur-crested cockatoo'),
    ('cockatoo-palm', 'Palm cockatoo'),
    ('cockatoo-galah', 'Galah cockatoo'),
    ('orange-winged-amazon', 'Orange-winged amazon'),
    ('lilac-crowned-amazon', 'Lilac-crowned amazon'),
    ('white-fronted-amazon', 'White-fronted amazon'),
    ('red-lored-amazon', 'Red-lored amazon'),
    ('lori-scaly', 'Scaly-breasted lorikeet'),
    ('budgerigar', 'Budgerigar'),
    ('cockatiel', 'Cockatiel'),
    ('lovebird-fischer', "Fischer's lovebird"),
    ('lovebird-peach', 'Rosy-faced lovebird'),
    ('conure-sun', 'Sun conure'),
    ('conure-green', 'Green-cheeked conure'),
    ('conure-blue', 'Blue-crowned conure'),
    ('conure-jenday', 'Jenday conure'),
    ('conure-nanday', 'Nanday conure'),
    ('pionus-blue', 'Blue-headed pionus'),
    ('pionus-white', 'White-crowned pionus'),
    ('caique-black', 'Black-headed caique'),
    ('caique-white', 'White-bellied caique'),
    ('poicephalus-senegal', 'Senegal parrot'),
    ('poicephalus-meyer', "Meyer's parrot"),
    ('poicephalus-jardine', "Jardine's parrot"),
    ('eclectus', 'Eclectus parrot'),
    ('hanging-parrot', 'Blue-crowned hanging parrot'),
    ('fig-parrot', 'Double-eyed fig parrot'),
    ('broadbill', 'Bornean broadbill'),
    ('pitta-banded', 'Banded pitta'),
    ('pitta-fairy', 'Fairy pitta'),
    ('broadbill-scarlet', 'Black-and-red broadbill'),
    ('trogon-red', 'Red-headed trogon'),
    ('trogon-orange', 'Orange-breasted trogon'),
    ('trogon-ward', "Ward's trogon"),
    ('kingfisher-common', 'Common kingfisher'),
    ('kingfisher-belted', 'Belted kingfisher'),
    ('kingfisher-collared', 'Collared kingfisher'),
    ('kingfisher-pied', 'Pied kingfisher'),
    ('bee-eater-blue', 'Blue-throated bee-eater'),
    ('bee-eater-rainbow', 'Rainbow bee-eater'),
    ('bee-eater-white', 'White-throated bee-eater'),
    ('roller-broad', 'Broad-billed roller'),
    ('roller-indian', 'Indian roller'),
    ('hornbill-great', 'Great hornbill'),
    ('hornbill-rhinoceros', 'Rhinoceros hornbill'),
    ('hornbill-wrinkled', 'Wrinkled hornbill'),
    ('hornbill-oriental', 'Oriental pied hornbill'),
    ('barbet-coppersmith', 'Coppersmith barbet'),
    ('barbet-blue', 'Blue-throated barbet'),
    ('barbet-golden', 'Golden-naped barbet'),
    ('barbet-red', 'Red-throated barbet'),
    ('jacana-comb', 'Comb-crested jacana'),
    ('jacana-pheasant', 'Pheasant-tailed jacana'),
    ('jacana-bronze', 'Bronze-winged jacana'),
    ('ibis-glossy', 'Glossy ibis'),
    ('ibis-hadada', 'Hadada ibis'),
    ('spoonbill-royal', 'Royal spoonbill'),
    ('spoonbill-african', 'African spoonbill'),
    ('stork-adjutant', 'Lesser adjutant'),
    ('stork-painted', 'Painted stork'),
    ('stork-woolly', 'Woolly-necked stork'),
    ('heron-goliath', 'Goliath heron'),
    ('heron-purple', 'Purple heron'),
    ('heron-black', 'Black heron'),
    ('egret-cattle', 'Cattle egret'),
    ('egret-intermediate', 'Intermediate egret'),
    ('bittern-yellow', 'Yellow bittern'),
    ('bittern-cinnamon', 'Cinnamon bittern'),
    ('crane-sarus', 'Sarus crane'),
    ('crane-demoiselle', 'Demoiselle crane'),
    ('crane-wattled', 'Wattled crane'),
    ('rail-african', 'African rail'),
    ('rail-water', 'Water rail'),
    ('swamphen-purple', 'Purple swamphen'),
    ('swamphen-grey', 'Grey-headed swamphen'),
    ('moorhen-common', 'Common moorhen'),
    ('gallinule-azure', 'Azure gallinule'),
    ('darter-oriental', 'Oriental darter'),
    ('darter-african', 'African darter'),
    ('cormorant-great', 'Great cormorant'),
    ('cormorant-pied', 'Pied cormorant'),
    ('cormorant-little', 'Little cormorant'),
    ('frigatebird-great', 'Great frigatebird'),
    ('frigatebird-magnificent', 'Magnificent frigatebird'),
    ('booby-blue', 'Blue-footed booby'),
    ('booby-red', 'Red-footed booby'),
    ('booby-masked', 'Masked booby'),
    ('tropicbird-red', 'Red-tailed tropicbird'),
    ('tropicbird-white', 'White-tailed tropicbird'),
    ('tropicbird-phoebon', 'Red-billed tropicbird'),
    ('albatross-waved', 'Waved albatross'),
    ('petrel-giant', 'Southern giant petrel'),
    ('shearwater-sooty', 'Sooty shearwater'),
    ('shearwater-wedge', 'Wedge-tailed shearwater'),
    ('storm-petrel-wilson', "Wilson's storm petrel"),
    ('pelican-spot', 'Spot-billed pelican'),
    ('pelican-brown', 'Brown pelican'),
    ('anhinga-american', 'Anhinga'),
    ('grebe-horned', 'Horned grebe'),
    ('grebe-western', 'Western grebe'),
    ('grebe-eared', 'Eared grebe'),
]


def search_commons(search_term):
    """Search Wikimedia Commons for images"""
    try:
        # Search for images
        search_url = "https://commons.wikimedia.org/w/api.php"
        params = {
            'action': 'query',
            'format': 'json',
            'generator': 'search',
            'gsrnamespace': '6',  # File namespace
            'gsrsearch': f'{search_term} bird',
            'gsrlimit': '5',
            'prop': 'imageinfo',
            'iiprop': 'url|size',
            'iiurlwidth': '800'
        }
        
        response = session.get(search_url, params=params, timeout=15)
        
        if response.status_code == 200:
            data = response.json()
            pages = data.get('query', {}).get('pages', {})
            
            for page_id, page_data in pages.items():
                if page_id == '-1':
                    continue
                    
                imageinfo = page_data.get('imageinfo', [])
                if imageinfo:
                    image_url = imageinfo[0].get('url')
                    width = imageinfo[0].get('width', 0)
                    
                    # Only return if image is large enough
                    if image_url and width >= 400:
                        return image_url
                        
        # Fallback: try category search
        params = {
            'action': 'query',
            'format': 'json',
            'generator': 'categorymembers',
            'gcmnamespace': '6',
            'gcmtitle': f'Category:{search_term.replace(" ", "_")}',
            'gcmlimit': '5',
            'prop': 'imageinfo',
            'iiprop': 'url',
            'iiurlwidth': '800'
        }
        
        response = session.get(search_url, params=params, timeout=15)
        if response.status_code == 200:
            data = response.json()
            pages = data.get('query', {}).get('pages', {})
            
            for page_id, page_data in pages.items():
                if page_id == '-1':
                    continue
                    
                imageinfo = page_data.get('imageinfo', [])
                if imageinfo:
                    return imageinfo[0].get('url')
                    
    except Exception as e:
        print(f"  Search error: {e}")
    
    return None


def download_image(bird_id, search_term):
    """Download image for a bird species"""
    output_path = OUTPUT_DIR / f"{bird_id}.jpg"

    # Skip if already exists
    if output_path.exists():
        print(f"✓ {bird_id}: Already exists")
        return True

    print(f"  Searching for: {search_term}")
    
    # Search Commons
    image_url = search_commons(search_term)
    
    if not image_url:
        print(f"✗ {bird_id}: No image found")
        return False

    try:
        # Download the image
        img_response = session.get(image_url, timeout=30)
        
        if img_response.status_code == 200 and len(img_response.content) > 5000:
            with open(output_path, 'wb') as f:
                f.write(img_response.content)
            print(f"✓ {bird_id}: Downloaded")
            time.sleep(0.5)  # Rate limiting
            return True
        else:
            print(f"✗ {bird_id}: Download failed")
            return False
            
    except Exception as e:
        print(f"✗ {bird_id}: Error - {e}")
        return False


def main():
    print(f"Downloading tropical bird images to: {OUTPUT_DIR}")
    print(f"Birds to process: {len(BIRDS_TO_DOWNLOAD)}")
    print("-" * 50)

    success = 0
    failed = 0

    for i, (bird_id, search_term) in enumerate(BIRDS_TO_DOWNLOAD, 1):
        print(f"\n[{i}/{len(BIRDS_TO_DOWNLOAD)}] {bird_id}...")

        if download_image(bird_id, search_term):
            success += 1
        else:
            failed += 1

        # Progress update every 10 birds
        if i % 10 == 0:
            print(f"\n--- Progress: {success} success, {failed} failed ---")
            time.sleep(2)

    print("\n" + "=" * 50)
    print(f"Complete!")
    print(f"✓ Success: {success}")
    print(f"✗ Failed: {failed}")
    print(f"Total images: {len(list(OUTPUT_DIR.glob('*.jpg')))}")


if __name__ == '__main__':
    main()
