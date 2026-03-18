#!/usr/bin/env python3
"""
Script to download tropical bird images from Wikipedia/Wikimedia
Uses direct Wikipedia image API for better results
Usage: python3 download_tropical_birds_fast.py
"""

import requests
import os
import time
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

# Output directory
OUTPUT_DIR = Path(__file__).parent / 'birds-tropical'
OUTPUT_DIR.mkdir(exist_ok=True)

# List of tropical bird IDs with their Wikipedia article titles
WIKIPEDIA_BIRDS = {
    # Existing birds
    'scarlet-macaw': 'Scarlet macaw',
    'quetzal': 'Resplendent quetzal',
    'paradise-bird': 'Bird-of-paradise',
    'hummingbird': 'Ruby-throated hummingbird',
    'toucan': 'Toco toucan',
    'flamingo': 'Greater flamingo',
    'pelican': 'Great white pelican',
    'penguin': 'Emperor penguin',
    
    # Macaws
    'blue-macaw': 'Blue-and-yellow macaw',
    'green-macaw': 'Great green macaw',
    'military-macaw': 'Military macaw',
    'chestnut-macaw': 'Chestnut-fronted macaw',
    
    # Amazons
    'blue-fronted-amazon': 'Blue-fronted amazon',
    'yellow-crowned-amazon': 'Yellow-crowned amazon',
    'mealy-amazon': 'Mealy amazon',
    'lilac-crowned-amazon': 'Lilac-crowned amazon',
    'red-lored-amazon': 'Red-lored amazon',
    'white-fronted-amazon': 'White-fronted amazon',
    'orange-winged-amazon': 'Orange-winged amazon',
    
    # Cockatoos
    'cockatoo-umbrella': 'Umbrella cockatoo',
    'cockatoo-sulphur': 'Sulphur-crested cockatoo',
    'cockatoo-palm': 'Palm cockatoo',
    'cockatoo-galah': 'Galah',
    'cockatoo-gang-gang': 'Gang-gang cockatoo',
    
    # Lorikeets
    'lori-rainbow': 'Rainbow lorikeet',
    'lori-scaly': 'Scaly-breasted lorikeet',
    
    # Small Parrots
    'budgerigar': 'Budgerigar',
    'cockatiel': 'Cockatiel',
    'lovebird-fischer': "Fischer's lovebird",
    'lovebird-masked': 'Masked lovebird',
    'lovebird-peach': 'Rosy-faced lovebird',
    
    # Conures
    'conure-sun': 'Sun conure',
    'conure-green': 'Green-cheeked conure',
    'conure-blue': 'Blue-crowned conure',
    'conure-jenday': 'Jenday conure',
    'conure-nanday': 'Nanday conure',
    
    # Pionus
    'pionus-blue': 'Blue-headed pionus',
    'pionus-maximilian': "Maximilian pionus",
    'pionus-white': 'White-crowned pionus',
    
    # Caiques
    'caique-black': 'Black-headed caique',
    'caique-white': 'White-bellied caique',
    
    # Poicephalus
    'poicephalus-senegal': 'Senegal parrot',
    'poicephalus-meyer': "Meyer's parrot",
    'poicephalus-jardine': "Jardine's parrot",
    
    # Other Parrots
    'eclectus': 'Eclectus parrot',
    'hanging-parrot': 'Hanging parrot',
    'fig-parrot': 'Double-eyed fig parrot',
    
    # Broadbills & Pittas
    'broadbill': 'Bornean broadbill',
    'pitta-banded': 'Banded pitta',
    'pitta-fairy': 'Fairy pitta',
    'broadbill-scarlet': 'Black-and-red broadbill',
    
    # Trogons
    'trogon-red': 'Red-headed trogon',
    'trogon-orange': 'Orange-breasted trogon',
    'trogon-ward': "Ward's trogon",
    
    # Kingfishers
    'kingfisher-common': 'Common kingfisher',
    'kingfisher-belted': 'Belted kingfisher',
    'kingfisher-collared': 'Collared kingfisher',
    'kingfisher-pied': 'Pied kingfisher',
    
    # Bee-eaters
    'bee-eater-blue': 'Blue-throated bee-eater',
    'bee-eater-rainbow': 'Rainbow bee-eater',
    'bee-eater-white': 'White-throated bee-eater',
    
    # Rollers
    'roller-broad': 'Broad-billed roller',
    'roller-indian': 'Indian roller',
    
    # Hornbills
    'hornbill-great': 'Great hornbill',
    'hornbill-rhinoceros': 'Rhinoceros hornbill',
    'hornbill-wrinkled': 'Wrinkled hornbill',
    'hornbill-oriental': 'Oriental pied hornbill',
    
    # Barbets
    'barbet-coppersmith': 'Coppersmith barbet',
    'barbet-blue': 'Blue-throated barbet',
    'barbet-golden': 'Golden-naped barbet',
    'barbet-red': 'Red-throated barbet',
    
    # Jacanas
    'jacana-comb': 'Comb-crested jacana',
    'jacana-pheasant': 'Pheasant-tailed jacana',
    'jacana-bronze': 'Bronze-winged jacana',
    
    # Ibises
    'ibis-glossy': 'Glossy ibis',
    'ibis-hadada': 'Hadada ibis',
    
    # Spoonbills
    'spoonbill-royal': 'Royal spoonbill',
    'spoonbill-african': 'African spoonbill',
    
    # Storks
    'stork-adjutant': 'Lesser adjutant',
    'stork-painted': 'Painted stork',
    'stork-woolly': 'Woolly-necked stork',
    
    # Herons
    'heron-goliath': 'Goliath heron',
    'heron-purple': 'Purple heron',
    'heron-black': 'Black heron',
    
    # Egrets
    'egret-cattle': 'Cattle egret',
    'egret-intermediate': 'Intermediate egret',
    
    # Bitterns
    'bittern-yellow': 'Yellow bittern',
    'bittern-cinnamon': 'Cinnamon bittern',
    
    # Cranes
    'crane-sarus': 'Sarus crane',
    'crane-demoiselle': 'Demoiselle crane',
    'crane-wattled': 'Wattled crane',
    
    # Rails
    'rail-african': 'African rail',
    'rail-water': 'Water rail',
    
    # Swamphens
    'swamphen-purple': 'Purple swamphen',
    'swamphen-grey': 'Grey-headed swamphen',
    
    # Moorhens & Gallinules
    'moorhen-common': 'Common moorhen',
    'gallinule-azure': 'Azure gallinule',
    
    # Darters
    'darter-oriental': 'Oriental darter',
    'darter-african': 'African darter',
    
    # Cormorants
    'cormorant-great': 'Great cormorant',
    'cormorant-pied': 'Pied cormorant',
    'cormorant-little': 'Little cormorant',
    
    # Frigatebirds
    'frigatebird-great': 'Great frigatebird',
    'frigatebird-magnificent': 'Magnificent frigatebird',
    
    # Boobies
    'booby-blue': 'Blue-footed booby',
    'booby-red': 'Red-footed booby',
    'booby-masked': 'Masked booby',
    
    # Tropicbirds
    'tropicbird-red': 'Red-tailed tropicbird',
    'tropicbird-white': 'White-tailed tropicbird',
    'tropicbird-phoebon': 'Red-billed tropicbird',
    
    # Albatross & Petrels
    'albatross-waved': 'Waved albatross',
    'petrel-giant': 'Southern giant petrel',
    
    # Shearwaters
    'shearwater-sooty': 'Sooty shearwater',
    'shearwater-wedge': 'Wedge-tailed shearwater',
    
    # Storm Petrels
    'storm-petrel-wilson': "Wilson's storm petrel",
    
    # Pelicans
    'pelican-spot': 'Spot-billed pelican',
    'pelican-brown': 'Brown pelican',
    
    # Anhinga
    'anhinga-american': 'Anhinga',
    
    # Grebes
    'grebe-horned': 'Horned grebe',
    'grebe-western': 'Western grebe',
    'grebe-eared': 'Eared grebe',
}


def get_wikipedia_image(wiki_title):
    """Get main image from Wikipedia article"""
    try:
        # Get page images from Wikipedia API
        api_url = f"https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles={wiki_title.replace(' ', '_')}&pithumbsize=800&formatversion=2"
        
        response = requests.get(api_url, timeout=15, headers={
            'User-Agent': 'BirdTracker/1.0 (contact: birdtracker@example.com)'
        })
        
        if response.status_code == 200:
            data = response.json()
            pages = data.get('query', {}).get('pages', [])
            
            if pages and len(pages) > 0:
                image_info = pages[0].get('thumbnail')
                if image_info:
                    return image_info.get('source')
                    
    except Exception as e:
        pass
    
    return None


def download_image(bird_id, wiki_title):
    """Download image for a bird species"""
    output_path = OUTPUT_DIR / f"{bird_id}.jpg"

    # Skip if already exists
    if output_path.exists():
        return ('exists', bird_id)

    try:
        # Get image URL from Wikipedia
        image_url = get_wikipedia_image(wiki_title)
        
        if not image_url:
            return ('not_found', bird_id)
        
        # Download the image
        img_response = requests.get(image_url, timeout=30, headers={
            'User-Agent': 'BirdTracker/1.0 (contact: birdtracker@example.com)'
        })
        
        if img_response.status_code == 200 and len(img_response.content) > 5000:
            with open(output_path, 'wb') as f:
                f.write(img_response.content)
            return ('success', bird_id)
        else:
            return ('failed', bird_id)
            
    except Exception as e:
        return ('error', bird_id, str(e))


def main():
    print(f"Downloading tropical bird images to: {OUTPUT_DIR}")
    print(f"Birds to download: {len(WIKIPEDIA_BIRDS)}")
    print("-" * 50)

    results = {'success': 0, 'exists': 0, 'not_found': 0, 'failed': 0, 'error': 0}
    
    # Process with threading for speed
    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = {executor.submit(download_image, bird_id, wiki_title): bird_id 
                   for bird_id, wiki_title in WIKIPEDIA_BIRDS.items()}
        
        completed = 0
        for future in as_completed(futures):
            bird_id = futures[future]
            try:
                result = future.result()
                status = result[0]
                results[status] = results.get(status, 0) + 1
                
                if status == 'success':
                    print(f"✓ {bird_id}: Downloaded")
                elif status == 'exists':
                    print(f"✓ {bird_id}: Already exists")
                elif status == 'not_found':
                    print(f"✗ {bird_id}: No image found on Wikipedia")
                elif status == 'failed':
                    print(f"✗ {bird_id}: Download failed")
                elif status == 'error':
                    print(f"✗ {bird_id}: Error - {result[2]}")
                
                completed += 1
                if completed % 20 == 0:
                    print(f"\nProgress: {completed}/{len(WIKIPEDIA_BIRDS)}\n")
                    
            except Exception as e:
                results['error'] = results.get('error', 0) + 1
                print(f"✗ {bird_id}: Exception - {e}")

    print("=" * 50)
    print(f"Complete!")
    print(f"✓ Downloaded: {results['success']}")
    print(f"✓ Already existed: {results['exists']}")
    print(f"✗ Not found: {results['not_found']}")
    print(f"✗ Failed: {results['failed']}")
    print(f"✗ Errors: {results['error']}")
    print(f"Total images in folder: {len(list(OUTPUT_DIR.glob('*.jpg')))}")


if __name__ == '__main__':
    main()
