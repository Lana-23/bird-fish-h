#!/usr/bin/env python3
"""
Download images for Mediterranean fish species.
Uses Wikipedia Commons and other public sources.
"""

import os
import re
import time
import urllib.request
from pathlib import Path

# Mediterranean fish species with their Wikipedia article names
species_data = {
    'sea-bream': 'Spondyliosoma cantharus',
    'grouper': 'Epinephelus marginatus',
    'mackerel': 'Scomber scombrus',
    'swordfish': 'Xiphias gladius',
    'octopus': 'Octopus vulgaris',
    'cuttlefish': 'Sepia officinalis',
    'red-mullet': 'Mullus barbatus',
    'anchovy': 'Engraulis encrasicolus',
    'sardine': 'Sardina pilchardus',
    'turbot': 'Scophthalmus maximus',
    'monkfish': 'Lophius piscatorius',
    'wreckfish': 'Polyprion americanus',
    'amberjack': 'Seriola dumerili',
    'triggerfish': 'Balistes capriscus',
    'gilthead-bream': 'Sparus aurata',
    'white-seabream': 'Diplodus sargus',
    'common-dentex': 'Dentex dentex',
    'salema': 'Sarpa salpa',
    'common-two-banded': 'Diplodus vulgaris',
    'zebra-seabream': 'Diplodus cervinus',
    'sharp-snouted-seabream': 'Diplodus puntazzo',
    'red-seabream': 'Pagrus major',
    'goldline': 'Sarpa major',
    'blacktail': 'Serranus atricauda',
    'painted-comber': 'Serranus scriba',
    'dusky-grouper': 'Epinephelus marginatus',
    'goldblotch-grouper': 'Epinephelus costae',
    'white-grouper': 'Epinephelus aeneus',
    'european-seabass': 'Dicentrarchus labrax',
    'lebranche-seabass': 'Dicentrarchus labrax',
    'greater-amberjack': 'Seriola dumerili',
    'bluefish': 'Pomatomus saltatrix',
    'atlantic-bonito': 'Sarda sarda',
    'skipjack-tuna': 'Katsuwonus pelamis',
    'yellowfin-tuna': 'Thunnus albacares',
    'bluefin-tuna': 'Thunnus thynnus',
    'bullet-tuna': 'Auxis rochei',
    'frigate-tuna': 'Auxis thazard',
    'dolphinfish': 'Coryphaena hippurus',
    'pompano-dolphinfish': 'Coryphaena equiselis',
    'greater-baracuda': 'Sphyraena sphyraena',
    'european-baracuda': 'Sphyraena sphyraena',
    'yellowmouth-baracuda': 'Sphyraena viridensis',
    'horse-mackerel': 'Trachurus trachurus',
    'mediterranean-horse-mackerel': 'Trachurus mediterraneus',
    'blue-runner': 'Caranx crysos',
    'leerfish': 'Lichia amia',
    'pompano': 'Trachinotus carolinus',
    'shrimp-fish': 'Centrotus cornutus',
    'picarel': 'Spicara smaris',
    'blotched-picarel': 'Spicara maena',
    'common-pandora': 'Pagellus erythrinus',
    'axillary-seabream': 'Pagellus acarne',
    'red-porgy': 'Pagrus pagrus',
    'sand-steendbras': 'Lithognathus mormyrus',
    'annular-seabream': 'Diplodus annularis',
    'striped-seabream': 'Lithognathus mormyrus',
    'peacock-wrasse': 'Symphodus tinca',
    'rainbow-wrasse': 'Coris julis',
    'mediterranean-parrotfish': 'Sparisoma cretense',
    'ornate-wrasse': 'Thalassoma pavo',
    'cuckoo-wrasse': 'Labrus mixtus',
    'ballan-wrasse': 'Labrus bergylta',
    'goldsinny-wrasse': 'Ctenolabrus rupestris',
    'black-wrasse': 'Symphodus melanocercus',
    'five-spotted-wrasse': 'Symphodus roissali',
    'stem-toothed-wrasse': 'Symphodus rostratus',
    'zebra-wrasse': 'Symphodus roissali',
    'marseille-wrasse': 'Symphodus bailloni'
}

def get_wikipedia_image_url(latin_name):
    """Get image URL from Wikipedia API for a given species using thumbnail endpoint."""
    import urllib.request
    import json
    
    # Use the thumbnail API which is more rate-limit friendly
    search_url = f"https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=600&titles={latin_name.replace(' ', '_')}"
    
    try:
        req = urllib.request.Request(
            search_url,
            headers={'User-Agent': 'MediterraneanFishImageDownloader/1.0 (educational project)'}
        )
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode())
            
        pages = data.get('query', {}).get('pages', {})
        for page_id, page_data in pages.items():
            if 'thumbnail' in page_data:
                # Get higher resolution version
                thumb_url = page_data['thumbnail']['source']
                # Replace thumb size for better quality
                high_res = thumb_url.replace('/thumb/', '/').split('/')[0] + '/' + '/'.join(thumb_url.split('/')[1:])
                # Remove /thumb/ and resize params
                if '/thumb/' in thumb_url:
                    high_res = thumb_url[:thumb_url.rfind('/thumb/') + 7]
                    parts = thumb_url[thumb_url.rfind('/thumb/') + 7:].split('/')
                    if len(parts) > 2:
                        high_res = thumb_url[:thumb_url.rfind('/thumb/') + 7] + parts[0] + '/' + parts[2]
                return thumb_url
    except Exception as e:
        print(f"  Error fetching Wikipedia image for {latin_name}: {e}")
    
    return None

def download_image(url, output_path):
    """Download an image from URL to the specified path."""
    try:
        req = urllib.request.Request(
            url,
            headers={'User-Agent': 'Mozilla/5.0 (compatible; MediterraneanFishImageDownloader/1.0)'}
        )
        with urllib.request.urlopen(req, timeout=30) as response:
            with open(output_path, 'wb') as f:
                f.write(response.read())
        return True
    except Exception as e:
        print(f"  Error downloading image: {e}")
        return False

def main():
    output_dir = Path('/Users/svetik/Projects/bird-fish-h/assets/images/fish-mediterranean')
    output_dir.mkdir(parents=True, exist_ok=True)
    
    success_count = 0
    total = len(species_data)
    rate_limit_delay = 2  # seconds between requests to avoid rate limiting
    max_retries = 2
    
    print(f"Downloading images for {total} Mediterranean fish species...")
    print(f"Output directory: {output_dir}")
    print("-" * 60)
    
    for species_id, latin_name in species_data.items():
        print(f"[{success_count + 1}/{total}] Processing {species_id} ({latin_name})...")
        
        output_path = output_dir / f"{species_id}.jpg"
        
        # Skip if already exists
        if output_path.exists():
            print(f"  ✓ Already exists, skipping...")
            success_count += 1
            continue
        
        # Get Wikipedia image URL with retries
        image_url = None
        for retry in range(max_retries):
            image_url = get_wikipedia_image_url(latin_name)
            if image_url:
                break
            if retry < max_retries - 1:
                print(f"  Retrying... ({retry + 1}/{max_retries})")
                time.sleep(rate_limit_delay * 2)
        
        if image_url:
            print(f"  Downloading from Wikipedia...")
            if download_image(image_url, output_path):
                print(f"  ✓ Downloaded successfully!")
                success_count += 1
            else:
                print(f"  ✗ Download failed")
        else:
            print(f"  ✗ No image found on Wikipedia")
        
        # Be polite to the server - longer delay to avoid rate limiting
        time.sleep(rate_limit_delay)
    
    print("-" * 60)
    print(f"Completed: {success_count}/{total} images downloaded")
    print(f"Images saved to: {output_dir}")

if __name__ == '__main__':
    main()
