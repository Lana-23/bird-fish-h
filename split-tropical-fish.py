#!/usr/bin/env python3
"""
Split tropical fish into saltwater (fish-tropical.js) and freshwater (fish-river-tropical.js).
Also splits the images folder.
"""

import os
import re
import shutil
from pathlib import Path

# Freshwater species IDs
freshwater_species = {
    # Cichlids and Amazon fish
    'angelfish', 'discus', 'oscar', 'jack-dempsey', 'convict-cichlid', 
    'firemouth-cichlid', 'ram-cichlid', 'apistogramma', 'electric-blue-acara',
    'green-terror', 'angelfish-altum', 'parrot-cichlid', 'flowerhorn', 
    'frontosa', 'peacock-cichlid', 'mbuna', 'dolphin-cichlid', 'kribensis',
    # Tetras and Characins
    'neon-tetra', 'cardinal-tetra', 'rummy-nose-tetra', 'black-phantom-tetra',
    'bleeding-heart-tetra', 'ember-tetra', 'lemon-tetra', 'black-neon-tetra',
    'green-neon-tetra', 'congo-tetra', 'red-eye-tetra', 'serpae-tetra',
    'silver-tip-tetra', 'penguin-tetra', 'head-and-tail-light-tetra',
    'glass-bloodfin-tetra', 'red-fin-tetra', 'colombian-tetra', 'diamond-tetra',
    # Livebearers
    'guppy', 'molly', 'platy', 'swordtail',
    # Gourami and Labyrinth fish
    'dwarf-gourami', 'pearl-gourami', 'blue-gourami', 'three-spot-gourami',
    'kissing-gourami', 'giant-gourami', 'paradise-fish', 'chocolate-gourami',
    'spotted-gourami', 'opaline-gourami', 'golden-gourami', 'neon-dwarf-gourami',
    'honey-gourami', 'thick-lipped-gourami', 'sparkling-gourami', 
    'moonlight-gourami', 'snakeskin-gourami',
    # Loaches
    'clown-loach', 'yo-yo-loach', 'zebra-loach', 'kuhli-loach', 'weather-loach',
    'hillstream-loach', 'bengal-loach', 'emperor-loach', 'skunk-loach',
    # Barbs and Danios
    'coral-red-penfish', 'cherry-barb', 'tiger-barb', 'rosy-barb', 'gold-barb',
    'odessa-barb', 'zebra-danio', 'pearl-danio', 'leopard-danio', 'giant-danio',
    'celestial-pearl-danio', 'white-cloud-mountain-minnow',
    # Rasboras
    'rasbora', 'lambchop-rasbora', 'scissortail-rasbora', 'chili-rasbora',
    'mosquito-rasbora', 'phoenix-rasbora', 'dwarf-rasbora', 'emerald-dwarf-rasbora',
    'galaxy-rasbora',
    # Catfish
    'otocinclus', 'pleco', 'bristlenose-pleco', 'zebra-pleco', 'clown-pleco',
    'rubber-lip-pleco', 'green-phantom-pleco', 'gold-nugget-pleco', 
    'sailfin-pleco', 'peckoltia', 'corydoras-panda', 'corydoras-aeneus',
    'corydoras-sternbai', 'corydoras-pygmaeus', 'corydoras-habrosus',
    'corydoras-leucomelas', 'corydoras-metae', 'glass-catfish', 
    'upside-down-catfish', 'synodontis', 'banjo-catfish', 'pictus-catfish',
    'redtail-catfish', 'tiger-shovelnose-catfish', 'channel-catfish',
    'talking-catfish',
    # Other freshwater
    'betta', 'goldfish', 'koi', 'pencilfish', 'hatchetfish', 'rainbow-shark',
    'red-tailed-shark', 'bala-shark', 'roseline-shark', 'algae-eater', 
    'flying-fox', 'pacu', 'black-pacu',
    # Brackish (treated as river for simplicity)
    'dollfish', 'mono', 'scat', 'mudskipper', 'archerfish', 'foxface-rabbitfish',
    'spinefoot'
}

def split_tropical_fish():
    """Split fish-tropical.js into saltwater and freshwater files."""
    
    # Read original file
    with open('/Users/svetik/Projects/bird-fish-h/fish-tropical.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract header
    header_match = re.match(r'(//.*?\nexport const tropicalFish = \[)', content, re.DOTALL)
    header = header_match.group(1) if header_match else '// Tropical fish species data\nexport const tropicalFish = ['
    
    # Find all species blocks
    block_pattern = r'(\{\s*id:\s*\'([^\']+)\'[^}]*?\n\s*\})'
    blocks = re.findall(block_pattern, content, re.DOTALL)
    
    saltwater_blocks = []
    freshwater_blocks = []
    
    for block, species_id in blocks:
        if species_id in freshwater_species:
            freshwater_blocks.append(block)
        else:
            saltwater_blocks.append(block)
    
    # Create saltwater file (fish-tropical.js - keep original name for ocean fish)
    saltwater_content = header + '\n' + ',\n'.join(saltwater_blocks) + '\n];\n'
    with open('/Users/svetik/Projects/bird-fish-h/fish-tropical.js', 'w', encoding='utf-8') as f:
        f.write(saltwater_content)
    
    # Create freshwater file (fish-river-tropical.js)
    river_header = '// River Tropical Fish Species Data (Freshwater)\nexport const riverTropicalFish = ['
    freshwater_content = river_header + '\n' + ',\n'.join(freshwater_blocks) + '\n];\n'
    with open('/Users/svetik/Projects/bird-fish-h/fish-river-tropical.js', 'w', encoding='utf-8') as f:
        f.write(freshwater_content)
    
    print(f"✓ Created fish-tropical.js with {len(saltwater_blocks)} saltwater species")
    print(f"✓ Created fish-river-tropical.js with {len(freshwater_blocks)} freshwater species")
    
    # Split images folder
    saltwater_img_dir = Path('/Users/svetik/Projects/bird-fish-h/images/fish-tropical')
    river_img_dir = Path('/Users/svetik/Projects/bird-fish-h/images/fish-river-tropical')
    old_img_dir = Path('/Users/svetik/Projects/bird-fish-h/images/tropical-fish')
    
    saltwater_img_dir.mkdir(parents=True, exist_ok=True)
    river_img_dir.mkdir(parents=True, exist_ok=True)
    
    moved_saltwater = 0
    moved_river = 0
    
    if old_img_dir.exists():
        for img_path in old_img_dir.glob('*.jpg'):
            species_id = img_path.stem
            if species_id in freshwater_species:
                shutil.move(str(img_path), str(river_img_dir / img_path.name))
                moved_river += 1
            else:
                shutil.move(str(img_path), str(saltwater_img_dir / img_path.name))
                moved_saltwater += 1
        
        # Remove old folder if empty
        try:
            old_img_dir.rmdir()
        except OSError:
            pass  # Folder not empty or has other files
    
    print(f"✓ Moved {moved_saltwater} saltwater fish images to images/fish-tropical/")
    print(f"✓ Moved {moved_river} freshwater fish images to images/fish-river-tropical/")
    print("\nDone!")

if __name__ == '__main__':
    split_tropical_fish()
