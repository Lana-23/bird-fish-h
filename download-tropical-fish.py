#!/usr/bin/env python3
"""Download images for fish-river-tropical species from Wikimedia Commons."""

import os, re, sys, time, urllib.request, json

OUTPUT_DIR = 'assets/images/fish-river-tropical'
os.makedirs(OUTPUT_DIR, exist_ok=True)

def get_species():
    species = {}
    with open('fish-river-tropical.js', 'r', encoding='utf-8') as f:
        content = f.read()
    block_pattern = r"\{\s*id:\s*'([^']+)'[^}]*?latin_name:\s*'([^']+)'[^}]*?\}"
    for species_id, latin_name in re.findall(block_pattern, content, re.DOTALL):
        species[species_id] = latin_name
    return species

def search_wikimedia(query):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=5&gsrsearch={query.replace(' ', '+')}&prop=imageinfo&iiprop=url&iiurlwidth=640"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'FishTracker/1.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode())
        pages = data.get('query', {}).get('pages', {})
        for page in pages.values():
            if 'imageinfo' in page:
                info = page['imageinfo'][0]
                if 'thumburl' in info:
                    return info['thumburl']
    except: pass
    return None

def download(url, path):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'FishTracker/1.0'})
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        with open(path, 'wb') as f:
            f.write(data)
        print(f"  ✓ {len(data)//1024}KB")
        return True
    except Exception as e:
        print(f"  ✗ {e}")
        return False

species = get_species()
print(f"Found {len(species)} species")

success = skipped = failed = 0

for i, (sid, latin) in enumerate(species.items(), 1):
    path = os.path.join(OUTPUT_DIR, f"{sid}.jpg")
    if os.path.exists(path):
        print(f"[{i}/{len(species)}] {sid} - exists")
        skipped += 1
        continue
    
    print(f"[{i}/{len(species)}] {sid} ({latin})")
    
    # Try latin name first
    url = search_wikimedia(latin)
    if not url:
        # Try with fish
        url = search_wikimedia(f"{latin} fish")
    if not url:
        # Try common name
        url = search_wikimedia(sid.replace('-', ' '))
    
    if url:
        print(f"  Found: {url.split('/')[-1]}")
        if download(url, path):
            success += 1
            time.sleep(1)  # Increased delay to avoid 429
            continue
    
    print(f"  ✗ Not found")
    failed += 1
    time.sleep(1)  # Increased delay

print(f"\n✓ {success} downloaded, ⊘ {skipped} exists, ✗ {failed} failed")
