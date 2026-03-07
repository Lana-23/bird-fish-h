#!/usr/bin/env python3
"""
Script to download European bird images from Unsplash
Usage: python3 download_bird_images.py
"""

import requests
import os
import time
from pathlib import Path

# Output directory
OUTPUT_DIR = Path(__file__).parent / 'birds-european'
OUTPUT_DIR.mkdir(exist_ok=True)

# List of bird IDs to download (excluding ones we already have)
BIRDS_TO_DOWNLOAD = [
    # Warblers
    'nightingale', 'blackcap', 'garden-warbler', 'willow-warbler', 'chiffchaff',
    'sedge-warbler', 'reed-warbler', 'grasshopper-warbler', 'cetti-warbler', 'barred-warbler',
    
    # Finches
    'chaffinch', 'brambling', 'greenfinch', 'goldfinch', 'siskin',
    'linnet', 'redpoll', 'bullfinch', 'crossbill', 'hawfinch',
    
    # Sparrows
    'house-sparrow', 'tree-sparrow', 'rock-sparrow',
    
    # Thrushes
    'song-thrush', 'mistle-thrush', 'blackbird', 'fieldfare', 'redwing',
    'ring-ouzel', 'robin',
    
    # Larks
    'skylark', 'wood-lark', 'crested-lark', 'horned-lark',
    
    # Swallows
    'barn-swallow', 'house-martin', 'sand-martin', 'red-rumped-swallow',
    
    # Other passerines
    'wren', 'hedge-sparrow', 'starling', 'myna', 'nuthatch',
    'treecreeper', 'waxwing', 'long-tailed-tit', 'penduline-tit', 'bearded-tit',
    'shrike', 'red-backed-shrike', 'jay', 'magpie', 'jackdaw',
    'rook', 'carrion-crow', 'raven', 'nutcracker',
    
    # Ducks
    'mallard', 'teal', 'wigeon', 'pintail', 'shoveler',
    'gadwall', 'goldeneye', 'tufted-duck', 'pochard', 'scaup',
    'eider', 'merganser', 'smew', 'shelduck', 'ruddy-shelduck',
    
    # Geese
    'greylag-goose', 'bean-goose', 'white-fronted-goose', 'barnacle-goose',
    'brent-goose', 'red-breasted-goose',
    
    # Swans
    'whooper-swan', 'bewick-swan', 'black-swan',
    
    # Gulls
    'black-headed-gull', 'common-gull', 'herring-gull', 'lesser-black-backed-gull',
    'great-black-backed-gull', 'ivory-gull', 'kittiwake', 'little-gull',
    'sabine-gull', 'ross-gull', 'yellow-legged-gull', 'audouin-gull',
    'slender-billed-gull', 'mediterranean-gull', 'iceland-gull', 'glaucous-gull',
    
    # Terns
    'arctic-tern', 'common-tern', 'sandwich-tern', 'little-tern',
    'whiskered-tern', 'black-tern',
    
    # Waders
    'oystercatcher', 'lapwing', 'golden-plover', 'grey-plover', 'ringed-plover',
    'little-ringed-plover', 'dotterel', 'snipe', 'woodcock', 'godwit',
    'bar-tailed-godwit', 'curlew', 'whimbrel', 'sandpiper', 'greenshank',
    'redshank', 'spotted-redshank', 'dunlin', 'knot', 'sanderling',
    'turnstone', 'phalarope', 'avocet', 'stilt',
    
    # Eagles
    'white-tailed-eagle', 'lesser-spotted-eagle', 'greater-spotted-eagle',
    'imperial-eagle', 'booted-eagle', 'short-toed-eagle',
    
    # Hawks
    'sparrowhawk', 'levantsparrowhawk', 'honey-buzzard', 'marsh-harrier',
    'hen-harrier', 'pallid-harrier', 'montagu-harrier',
    
    # Falcons
    'kestrel', 'lesser-kestrel', 'hobby', 'eleonoras-falcon',
    'red-footed-falcon', 'merlin', 'gyrfalcon', 'peregrine',
    
    # Owls
    'tawny-owl', 'long-eared-owl', 'short-eared-owl', 'scops-owl',
    'snowy-owl', 'eagle-owl', 'pygmy-owl', 'little-owl',
    
    # Vultures
    'griffon-vulture', 'cinereous-vulture', 'egyptian-vulture', 'bearded-vulture',
    
    # Woodpeckers
    'black-woodpecker', 'green-woodpecker', 'grey-headed-woodpecker', 'wryneck',
    'three-toed-woodpecker', 'white-backed-woodpecker', 'middle-spotted-woodpecker',
    'lesser-spotted-woodpecker', 'syrian-woodpecker',
    
    # Kingfishers & Bee-eaters
    'white-throated-kingfisher', 'belted-kingfisher', 'bee-eater',
    'blue-cheeked-bee-eater', 'roller', 'hoopoe',
    
    # Game birds
    'pheasant', 'grey-partridge', 'red-legged-partridge', 'rock-partridge',
    'quail', 'snow-cock', 'black-grouse', 'capercaillie', 'hazel-grouse', 'ptarmigan',
    
    # Seabirds
    'puffin', 'razorbill', 'guillemot', 'black-guillemot', 'little-auk', 'great-auk',
    'cormorant', 'shag', 'pygmy-cormorant', 'white-pelican', 'dalmatian-pelican',
    'gannet', 'manx-shearwater', 'great-skua', 'arctic-skua', 'fulmar',
    'storm-petrel', 'leach-petrel', 'cory-shearwater', 'great-shearwater',
    'pomarine-jaeger', 'long-tailed-jaeger', 'skua',
]

# Already have these
ALREADY_HAVE = [
    'golden-eagle', 'barn-owl', 'great-tit', 'kingfisher',
    'woodpecker', 'heron', 'swan', 'hawk'
]


def get_unsplash_image_url(bird_name):
    """Get image URL from Unsplash Source"""
    # Convert bird ID to search terms
    search_term = bird_name.replace('-', ' ').replace(' ', '+')
    
    # Unsplash Source API (note: this service may be deprecated)
    url = f"https://source.unsplash.com/800x600/?{search_term},bird"
    
    return url


def download_image(bird_id, max_retries=3):
    """Download image for a bird species"""
    output_path = OUTPUT_DIR / f"{bird_id}.jpg"
    
    # Skip if already exists
    if output_path.exists():
        print(f"✓ {bird_id}: Already exists")
        return True
    
    # Try different search terms
    search_terms = [
        bird_id.replace('-', ' '),
        bird_id,
    ]
    
    for search_term in search_terms:
        for attempt in range(max_retries):
            try:
                # Using Lorem Flickr as fallback
                url = f"https://loremflickr.com/800/600/{search_term.replace(' ', ',')},bird?lock={hash(bird_id) + attempt}"
                
                response = requests.get(url, timeout=30)
                
                if response.status_code == 200 and len(response.content) > 10000:
                    with open(output_path, 'wb') as f:
                        f.write(response.content)
                    print(f"✓ {bird_id}: Downloaded ({search_term})")
                    time.sleep(1)  # Be nice to the server
                    return True
                    
            except Exception as e:
                if attempt == max_retries - 1:
                    print(f"✗ {bird_id}: Failed - {str(e)[:50]}")
                time.sleep(1)
    
    return False


def main():
    print(f"Downloading bird images to: {OUTPUT_DIR}")
    print(f"Birds to download: {len(BIRDS_TO_DOWNLOAD)}")
    print(f"Already have: {len(ALREADY_HAVE)}")
    print("-" * 50)
    
    success = 0
    failed = 0
    
    for i, bird_id in enumerate(BIRDS_TO_DOWNLOAD, 1):
        print(f"[{i}/{len(BIRDS_TO_DOWNLOAD)}] Processing {bird_id}...")
        
        if download_image(bird_id):
            success += 1
        else:
            failed += 1
        
        # Progress update every 10 birds
        if i % 10 == 0:
            print(f"\nProgress: {success} downloaded, {failed} failed\n")
    
    print("=" * 50)
    print(f"Complete!")
    print(f"✓ Downloaded: {success}")
    print(f"✗ Failed: {failed}")
    print(f"Total: {success + len(ALREADY_HAVE)} / {len(BIRDS_TO_DOWNLOAD) + len(ALREADY_HAVE)}")


if __name__ == '__main__':
    main()
