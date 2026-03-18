#!/usr/bin/env python3
"""
Script to download tropical bird images from Unsplash/LoremFlickr
Usage: python3 download_tropical_birds.py
"""

import requests
import os
import time
from pathlib import Path

# Output directory
OUTPUT_DIR = Path(__file__).parent / 'birds-tropical'
OUTPUT_DIR.mkdir(exist_ok=True)

# List of tropical bird IDs to download
TROPICAL_BIRDS = [
    # Existing birds
    'scarlet-macaw', 'quetzal', 'paradise-bird', 'hummingbird', 'toucan', 
    'flamingo', 'pelican', 'penguin',
    
    # Macaws
    'blue-macaw', 'green-macaw', 'military-macaw', 'chestnut-macaw',
    
    # Amazons
    'blue-fronted-amazon', 'yellow-crowned-amazon', 'mealy-amazon', 
    'lilac-crowned-amazon', 'red-lored-amazon', 'white-fronted-amazon', 
    'orange-winged-amazon',
    
    # Cockatoos
    'cockatoo-umbrella', 'cockatoo-sulphur', 'cockatoo-palm', 
    'cockatoo-galah', 'cockatoo-gang-gang',
    
    # Lorikeets
    'lori-rainbow', 'lori-scaly',
    
    # Small Parrots
    'budgerigar', 'cockatiel', 
    'lovebird-fischer', 'lovebird-masked', 'lovebird-peach',
    
    # Conures
    'conure-sun', 'conure-green', 'conure-blue', 'conure-jenday', 'conure-nanday',
    
    # Pionus
    'pionus-blue', 'pionus-maximilian', 'pionus-white',
    
    # Caiques
    'caique-black', 'caique-white',
    
    # Poicephalus
    'poicephalus-senegal', 'poicephalus-meyer', 'poicephalus-jardine',
    
    # Other Parrots
    'eclectus', 'hanging-parrot', 'fig-parrot',
    
    # Broadbills & Pittas
    'broadbill', 'pitta-banded', 'pitta-fairy', 'broadbill-scarlet',
    
    # Trogons
    'trogon-red', 'trogon-orange', 'trogon-ward',
    
    # Kingfishers
    'kingfisher-common', 'kingfisher-belted', 'kingfisher-collared', 'kingfisher-pied',
    
    # Bee-eaters
    'bee-eater-blue', 'bee-eater-rainbow', 'bee-eater-white',
    
    # Rollers
    'roller-broad', 'roller-indian',
    
    # Hornbills
    'hornbill-great', 'hornbill-rhinoceros', 'hornbill-wrinkled', 'hornbill-oriental',
    
    # Barbets
    'barbet-coppersmith', 'barbet-blue', 'barbet-golden', 'barbet-red',
    
    # Jacanas
    'jacana-comb', 'jacana-pheasant', 'jacana-bronze',
    
    # Ibises
    'ibis-glossy', 'ibis-hadada',
    
    # Spoonbills
    'spoonbill-royal', 'spoonbill-african',
    
    # Storks
    'stork-adjutant', 'stork-painted', 'stork-woolly',
    
    # Herons
    'heron-goliath', 'heron-purple', 'heron-black',
    
    # Egrets
    'egret-cattle', 'egret-intermediate',
    
    # Bitterns
    'bittern-yellow', 'bittern-cinnamon',
    
    # Cranes
    'crane-sarus', 'crane-demoiselle', 'crane-wattled',
    
    # Rails
    'rail-african', 'rail-water',
    
    # Swamphens
    'swamphen-purple', 'swamphen-grey',
    
    # Moorhens & Gallinules
    'moorhen-common', 'gallinule-azure',
    
    # Darters
    'darter-oriental', 'darter-african',
    
    # Cormorants
    'cormorant-great', 'cormorant-pied', 'cormorant-little',
    
    # Frigatebirds
    'frigatebird-great', 'frigatebird-magnificent',
    
    # Boobies
    'booby-blue', 'booby-red', 'booby-masked',
    
    # Tropicbirds
    'tropicbird-red', 'tropicbird-white', 'tropicbird-phoebon',
    
    # Albatross & Petrels
    'albatross-waved', 'petrel-giant',
    
    # Shearwaters
    'shearwater-sooty', 'shearwater-wedge',
    
    # Storm Petrels
    'storm-petrel-wilson',
    
    # Pelicans
    'pelican-spot', 'pelican-brown',
    
    # Anhinga
    'anhinga-american',
    
    # Grebes
    'grebe-horned', 'grebe-western', 'grebe-eared',
]

# Search term mappings for better results
SEARCH_TERMS = {
    'scarlet-macaw': 'scarlet macaw parrot',
    'blue-macaw': 'blue and yellow macaw',
    'green-macaw': 'great green macaw',
    'military-macaw': 'military macaw',
    'chestnut-macaw': 'chestnut fronted macaw',
    'blue-fronted-amazon': 'blue fronted amazon parrot',
    'yellow-crowned-amazon': 'yellow crowned amazon parrot',
    'mealy-amazon': 'mealy amazon parrot',
    'lilac-crowned-amazon': 'lilac crowned amazon',
    'red-lored-amazon': 'red lored amazon',
    'white-fronted-amazon': 'white fronted amazon parrot',
    'orange-winged-amazon': 'orange winged amazon',
    'cockatoo-umbrella': 'umbrella cockatoo white',
    'cockatoo-sulphur': 'sulphur crested cockatoo',
    'cockatoo-palm': 'palm cockatoo black',
    'cockatoo-galah': 'galah cockatoo pink',
    'cockatoo-gang-gang': 'gang gang cockatoo',
    'lori-rainbow': 'rainbow lorikeet',
    'lori-scaly': 'scaly breasted lorikeet',
    'budgerigar': 'budgerigar budgie parakeet',
    'cockatiel': 'cockatiel bird',
    'lovebird-fischer': "fischer lovebird",
    'lovebird-masked': 'masked lovebird',
    'lovebird-peach': 'peach faced lovebird',
    'conure-sun': 'sun conure parrot',
    'conure-green': 'green cheeked conure',
    'conure-blue': 'blue crowned conure',
    'conure-jenday': 'jenday conure',
    'conure-nanday': 'nanday conure',
    'pionus-blue': 'blue headed pionus',
    'pionus-maximilian': "maximilians pionus",
    'pionus-white': 'white capped pionus',
    'caique-black': 'black headed caique',
    'caique-white': 'white bellied caique',
    'poicephalus-senegal': 'senegal parrot',
    'poicephalus-meyer': "meyers parrot",
    'poicephalus-jardine': "jardines parrot",
    'eclectus': 'eclectus parrot',
    'hanging-parrot': 'hanging parrot',
    'fig-parrot': 'fig parrot',
    'quetzal': 'resplendent quetzal',
    'paradise-bird': 'bird of paradise',
    'hummingbird': 'ruby throated hummingbird',
    'toucan': 'toco toucan',
    'broadbill': 'bornean broadbill',
    'pitta-banded': 'banded pitta',
    'pitta-fairy': 'fairy pitta',
    'broadbill-scarlet': 'scarlet breasted broadbill',
    'trogon-red': 'red headed trogon',
    'trogon-orange': 'orange breasted trogon',
    'trogon-ward': "wards trogon",
    'kingfisher-common': 'common kingfisher',
    'kingfisher-belted': 'belted kingfisher',
    'kingfisher-collared': 'collared kingfisher',
    'kingfisher-pied': 'pied kingfisher',
    'bee-eater-blue': 'blue throated bee eater',
    'bee-eater-rainbow': 'rainbow bee eater',
    'bee-eater-white': 'white throated bee eater',
    'roller-broad': 'broad billed roller',
    'roller-indian': 'indian roller',
    'hornbill-great': 'great hornbill',
    'hornbill-rhinoceros': 'rhinoceros hornbill',
    'hornbill-wrinkled': 'wrinkled hornbill',
    'hornbill-oriental': 'oriental pied hornbill',
    'barbet-coppersmith': 'coppersmith barbet',
    'barbet-blue': 'blue throated barbet',
    'barbet-golden': 'golden naped barbet',
    'barbet-red': 'red throated barbet',
    'jacana-comb': 'comb crested jacana',
    'jacana-pheasant': 'pheasant tailed jacana',
    'jacana-bronze': 'bronze winged jacana',
    'ibis-glossy': 'glossy ibis',
    'ibis-hadada': 'hadada ibis',
    'spoonbill-royal': 'royal spoonbill',
    'spoonbill-african': 'african spoonbill',
    'stork-adjutant': 'lesser adjutant stork',
    'stork-painted': 'painted stork',
    'stork-woolly': 'woolly necked stork',
    'heron-goliath': 'goliath heron',
    'heron-purple': 'purple heron',
    'heron-black': 'black heron',
    'egret-cattle': 'cattle egret',
    'egret-intermediate': 'intermediate egret',
    'bittern-yellow': 'yellow bittern',
    'bittern-cinnamon': 'cinnamon bittern',
    'crane-sarus': 'sarus crane',
    'crane-demoiselle': 'demoiselle crane',
    'crane-wattled': 'wattled crane',
    'rail-african': 'african rail',
    'rail-water': 'water rail',
    'swamphen-purple': 'purple swamphen',
    'swamphen-grey': 'grey headed swamphen',
    'moorhen-common': 'common moorhen',
    'gallinule-azure': 'azure gallinule',
    'darter-oriental': 'oriental darter',
    'darter-african': 'african darter',
    'cormorant-great': 'great cormorant',
    'cormorant-pied': 'pied cormorant',
    'cormorant-little': 'little cormorant',
    'frigatebird-great': 'great frigatebird',
    'frigatebird-magnificent': 'magnificent frigatebird',
    'booby-blue': 'blue footed booby',
    'booby-red': 'red footed booby',
    'booby-masked': 'masked booby',
    'tropicbird-red': 'red tailed tropicbird',
    'tropicbird-white': 'white tailed tropicbird',
    'tropicbird-phoebon': 'red billed tropicbird',
    'albatross-waved': 'waved albatross',
    'petrel-giant': 'giant petrel',
    'shearwater-sooty': 'sooty shearwater',
    'shearwater-wedge': 'wedge tailed shearwater',
    'storm-petrel-wilson': "wilsons storm petrel",
    'pelican-spot': 'spot billed pelican',
    'pelican-brown': 'brown pelican',
    'anhinga-american': 'anhinga darter',
    'grebe-horned': 'horned grebe',
    'grebe-western': 'western grebe',
    'grebe-eared': 'eared grebe',
    'flamingo': 'greater flamingo',
    'pelican': 'great white pelican',
    'penguin': 'emperor penguin',
}


def download_image(bird_id, search_term=None, max_retries=3):
    """Download image for a bird species"""
    output_path = OUTPUT_DIR / f"{bird_id}.jpg"

    # Skip if already exists
    if output_path.exists():
        print(f"✓ {bird_id}: Already exists")
        return True

    # Use custom search term or default to bird_id
    if search_term is None:
        search_term = bird_id.replace('-', ' ')

    for attempt in range(max_retries):
        try:
            # Using Lorem Flickr
            url = f"https://loremflickr.com/800/600/{search_term.replace(' ', ',')},bird?lock={hash(bird_id) + attempt}"

            response = requests.get(url, timeout=30)

            if response.status_code == 200 and len(response.content) > 10000:
                with open(output_path, 'wb') as f:
                    f.write(response.content)
                print(f"✓ {bird_id}: Downloaded")
                time.sleep(0.5)  # Be nice to the server
                return True
            else:
                print(f"✗ {bird_id}: Empty response (attempt {attempt + 1})")

        except Exception as e:
            if attempt == max_retries - 1:
                print(f"✗ {bird_id}: Failed - {str(e)[:50]}")
            time.sleep(1)

    return False


def main():
    print(f"Downloading tropical bird images to: {OUTPUT_DIR}")
    print(f"Birds to download: {len(TROPICAL_BIRDS)}")
    print("-" * 50)

    success = 0
    failed = 0
    skipped = 0

    for i, bird_id in enumerate(TROPICAL_BIRDS, 1):
        print(f"[{i}/{len(TROPICAL_BIRDS)}] Processing {bird_id}...")

        search_term = SEARCH_TERMS.get(bird_id)

        if download_image(bird_id, search_term):
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
    print(f"Total images in folder: {len(list(OUTPUT_DIR.glob('*.jpg')))}")


if __name__ == '__main__':
    main()
