#!/usr/bin/env python3
"""Download images for new Angelfish and Butterflyfish species"""

import urllib.request
import json
import time
from pathlib import Path

# New species to download
new_species = [
    # Angelfish (10)
    ('gray-angelfish', 'Pomacanthus arcuatus'),
    ('blue-ring-angelfish', 'Pomacanthus annularis'),
    ('koran-angelfish', 'Pomacanthus semicirculatus'),
    ('regal-angelfish', 'Pygoplites diacanthus'),
    ('flame-angelfish', 'Centropyge loricula'),
    ('cherub-angelfish', 'Centropyge argi'),
    ('lemonpeel-angelfish', 'Centropyge flavissima'),
    ('coral-beauty', 'Centropyge bispinosa'),
    ('keyhole-angelfish', 'Centropyge tibicen'),
    # Butterflyfish (15)
    ('racoon-butterflyfish', 'Chaetodon lunula'),
    ('teardrop-butterflyfish', 'Chaetodon unimaculatus'),
    ('mask-butterflyfish', 'Chaetodon semilarvatus'),
    ('pygmy-butterflyfish', 'Chaetodon permutandus'),
    ('spotband-butterflyfish', 'Chaetodon punctatofasciatus'),
    ('redfin-butterflyfish', 'Chaetodon trifasciatus'),
    ('threadfin-butterflyfish', 'Chaetodon auriga'),
    ('lattice-butterflyfish', 'Chaetodon rafflesii'),
    ('ornate-butterflyfish', 'Chaetodon ornatissimus'),
    ('pearce-butterflyfish', 'Chaetodon pelewensis'),
    ('blue-cheek-butterflyfish', 'Chaetodon semilarvatus'),
    ('copperband-butterflyfish-2', 'Chelmon rostratus'),
    ('forceps-butterflyfish', 'Forcipiger flavissimus'),
    ('longnose-butterflyfish-2', 'Forcipiger longirostris'),
    ('scrawled-butterflyfish', 'Chaetodon meyeri'),
]

output_dir = Path('/Users/svetik/Projects/bird-fish-h/images/tropical-fish')
output_dir.mkdir(parents=True, exist_ok=True)

print(f"Downloading {len(new_species)} new species images...")
print("-" * 60)

success = 0
for species_id, latin_name in new_species:
    output_path = output_dir / f'{species_id}.jpg'
    if output_path.exists():
        print(f'✓ {species_id} - already exists')
        success += 1
        continue
    
    search_url = f"https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=3&gsrsearch={latin_name.replace(' ', '%20')}&prop=imageinfo&iiprop=url&iiurlwidth=640"
    try:
        req = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode())
        pages = data.get('query', {}).get('pages', {})
        for page_id, page_data in pages.items():
            if 'imageinfo' in page_data and len(page_data['imageinfo']) > 0:
                img_url = page_data['imageinfo'][0].get('thumburl') or page_data['imageinfo'][0].get('url')
                if img_url:
                    with urllib.request.urlopen(img_url, timeout=30) as img_resp:
                        with open(output_path, 'wb') as f:
                            f.write(img_resp.read())
                    print(f'✓ {species_id} - downloaded')
                    success += 1
                    break
        else:
            print(f'✗ {species_id} - no image found')
    except Exception as e:
        print(f'✗ {species_id} - error: {e}')
    time.sleep(3)

print("-" * 60)
print(f"Done! Downloaded {success}/{len(new_species)} images")
