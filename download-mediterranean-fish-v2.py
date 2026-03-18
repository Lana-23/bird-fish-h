#!/usr/bin/env python3
"""
Download images for Mediterranean fish species - Version 2.
Uses Wikimedia Commons API with broader search.
"""

import os
import re
import time
import urllib.request
import json
from pathlib import Path

# Mediterranean fish species with multiple search terms
species_data = {
    'sea-bream': ['Spondyliosoma cantharus', 'Black sea bream'],
    'grouper': ['Epinephelus marginatus', 'Dusky grouper'],
    'mackerel': ['Scomber scombrus', 'Atlantic mackerel'],
    'swordfish': ['Xiphias gladius', 'Swordfish'],
    'octopus': ['Octopus vulgaris', 'Common octopus'],
    'cuttlefish': ['Sepia officinalis', 'Common cuttlefish'],
    'red-mullet': ['Mullus barbatus', 'Red mullet'],
    'anchovy': ['Engraulis encrasicolus', 'European anchovy'],
    'sardine': ['Sardina pilchardus', 'European pilchard'],
    'turbot': ['Scophthalmus maximus', 'Turbot'],
    'monkfish': ['Lophius piscatorius', 'Monkfish'],
    'wreckfish': ['Polyprion americanus', 'Wreckfish'],
    'amberjack': ['Seriola dumerili', 'Greater amberjack'],
    'triggerfish': ['Balistes capriscus', 'Gray triggerfish'],
    'gilthead-bream': ['Sparus aurata', 'Gilthead seabream'],
    'white-seabream': ['Diplodus sargus', 'White seabream'],
    'common-dentex': ['Dentex dentex', 'Common dentex'],
    'salema': ['Sarpa salpa', 'Salema porgy'],
    'common-two-banded': ['Diplodus vulgaris', 'Common two-banded bream'],
    'zebra-seabream': ['Diplodus cervinus', 'Zebra seabream'],
    'sharp-snouted-seabream': ['Diplodus puntazzo', 'Sharpnose seabream'],
    'red-seabream': ['Pagrus major', 'Red seabream'],
    'goldline': ['Sarpa major', 'Goldline'],
    'blacktail': ['Serranus atricauda', 'Blacktail comber'],
    'painted-comber': ['Serranus scriba', 'Painted comber'],
    'dusky-grouper': ['Epinephelus marginatus', 'Dusky grouper'],
    'goldblotch-grouper': ['Epinephelus costae', 'Goldblotch grouper'],
    'white-grouper': ['Epinephelus aeneus', 'White grouper'],
    'european-seabass': ['Dicentrarchus labrax', 'European seabass'],
    'lebranche-seabass': ['Dicentrarchus labrax', 'European seabass'],
    'greater-amberjack': ['Seriola dumerili', 'Greater amberjack'],
    'bluefish': ['Pomatomus saltatrix', 'Bluefish'],
    'atlantic-bonito': ['Sarda sarda', 'Atlantic bonito'],
    'skipjack-tuna': ['Katsuwonus pelamis', 'Skipjack tuna'],
    'yellowfin-tuna': ['Thunnus albacares', 'Yellowfin tuna'],
    'bluefin-tuna': ['Thunnus thynnus', 'Atlantic bluefin tuna'],
    'bullet-tuna': ['Auxis rochei', 'Bullet tuna'],
    'frigate-tuna': ['Auxis thazard', 'Frigate tuna'],
    'dolphinfish': ['Coryphaena hippurus', 'Common dolphinfish'],
    'pompano-dolphinfish': ['Coryphaena equiselis', 'Pompano dolphinfish'],
    'greater-baracuda': ['Sphyraena sphyraena', 'European barracuda'],
    'european-baracuda': ['Sphyraena sphyraena', 'European barracuda'],
    'yellowmouth-baracuda': ['Sphyraena viridensis', 'Yellowmouth barracuda'],
    'horse-mackerel': ['Trachurus trachurus', 'Atlantic horse mackerel'],
    'mediterranean-horse-mackerel': ['Trachurus mediterraneus', 'Mediterranean horse mackerel'],
    'blue-runner': ['Caranx crysos', 'Blue runner'],
    'leerfish': ['Lichia amia', 'Leerfish'],
    'pompano': ['Trachinotus carolinus', 'Common pompano'],
    'shrimp-fish': ['Centrotus cornutus', 'Shrimp fish'],
    'picarel': ['Spicara smaris', 'Blotched picarel'],
    'blotched-picarel': ['Spicara maena', 'Blotched picarel'],
    'common-pandora': ['Pagellus erythrinus', 'Common pandora'],
    'axillary-seabream': ['Pagellus acarne', 'Axillary seabream'],
    'red-porgy': ['Pagrus pagrus', 'Red porgy'],
    'sand-steendbras': ['Lithognathus mormyrus', 'Sand steenbras'],
    'annular-seabream': ['Diplodus annularis', 'Annular seabream'],
    'striped-seabream': ['Lithognathus mormyrus', 'Sand steenbras'],
    'peacock-wrasse': ['Symphodus tinca', 'Peacock wrasse'],
    'rainbow-wrasse': ['Coris julis', 'Rainbow wrasse'],
    'mediterranean-parrotfish': ['Sparisoma cretense', 'Mediterranean parrotfish'],
    'ornate-wrasse': ['Thalassoma pavo', 'Ornate wrasse'],
    'cuckoo-wrasse': ['Labrus mixtus', 'Cuckoo wrasse'],
    'ballan-wrasse': ['Labrus bergylta', 'Ballan wrasse'],
    'goldsinny-wrasse': ['Ctenolabrus rupestris', 'Goldsinny'],
    'black-wrasse': ['Symphodus melanocercus', 'Black wrasse'],
    'five-spotted-wrasse': ['Symphodus roissali', 'Five-spotted wrasse'],
    'stem-toothed-wrasse': ['Symphodus rostratus', 'Sterile wrasse'],
    'zebra-wrasse': ['Symphodus roissali', 'Five-spotted wrasse'],
    'marseille-wrasse': ['Symphodus bailloni', 'Marseille wrasse']
}

def search_wikimedia_commons(query):
    """Search Wikimedia Commons for images."""
    search_url = f"https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=5&gsrsearch={query.replace(' ', '%20')}&prop=imageinfo&iiprop=url&iiurlwidth=800"
    
    try:
        req = urllib.request.Request(
            search_url,
            headers={'User-Agent': 'MediterraneanFishImageDownloader/2.0 (educational project)'}
        )
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode())
            
        pages = data.get('query', {}).get('pages', {})
        for page_id, page_data in pages.items():
            if 'imageinfo' in page_data and len(page_data['imageinfo']) > 0:
                # Get the best available URL
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
            headers={'User-Agent': 'Mozilla/5.0 (compatible; MediterraneanFishImageDownloader/2.0)'}
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
    total = len(species_data)
    rate_limit_delay = 1.5  # seconds between requests
    
    print(f"Downloading images for {total} Mediterranean fish species...")
    print(f"Output directory: {output_dir}")
    print("-" * 60)
    
    for species_id, search_terms in species_data.items():
        print(f"[{success_count + 1}/{total}] Processing {species_id}...")
        
        output_path = output_dir / f"{species_id}.jpg"
        
        # Skip if already exists
        if output_path.exists():
            print(f"  ✓ Already exists, skipping...")
            success_count += 1
            continue
        
        # Try each search term
        image_url = None
        for term in search_terms:
            image_url = search_wikimedia_commons(term)
            if image_url:
                print(f"  Found via: '{term}'")
                break
            time.sleep(0.5)
        
        if image_url:
            print(f"  Downloading...")
            if download_image(image_url, output_path):
                print(f"  ✓ Downloaded successfully!")
                success_count += 1
            else:
                print(f"  ✗ Download failed")
        else:
            print(f"  ✗ No image found")
        
        # Be polite to the server
        time.sleep(rate_limit_delay)
    
    print("-" * 60)
    print(f"Completed: {success_count}/{total} images downloaded")
    print(f"Images saved to: {output_dir}")

if __name__ == '__main__':
    main()
