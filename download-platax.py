#!/usr/bin/env python3
"""Download Platax batfish images"""

import urllib.request
import json
import time
from pathlib import Path

platax_species = [
    ('orbicular-batfish', 'Platax orbicularis'),
    ('pinnatus-batfish', 'Platax pinnatus'),
    ('blunthead-batfish', 'Platax boersii'),
    ('redfin-batfish', 'Platax boersii'),
    ('longfin-batfish', 'Platax altissimus'),
    ('african-batfish', 'Platax boersii')
]

output_dir = Path('/Users/svetik/Projects/bird-fish-h/images/tropical-fish')
output_dir.mkdir(parents=True, exist_ok=True)

for species_id, latin_name in platax_species:
    output_path = output_dir / f'{species_id}.jpg'
    if output_path.exists():
        print(f'✓ {species_id} - already exists')
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
                    break
        else:
            print(f'✗ {species_id} - no image found')
    except Exception as e:
        print(f'✗ {species_id} - error: {e}')
    time.sleep(2)

print("\nDone!")
