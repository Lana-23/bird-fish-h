#!/usr/bin/env python3
"""
Fix the split of tropical fish into saltwater and freshwater files.
"""

import re
from pathlib import Path

# Freshwater species IDs
freshwater_species = {
    'angelfish', 'discus', 'oscar', 'jack-dempsey', 'convict-cichlid', 
    'firemouth-cichlid', 'ram-cichlid', 'apistogramma', 'electric-blue-acara',
    'green-terror', 'angelfish-altum', 'parrot-cichlid', 'flowerhorn', 
    'frontosa', 'peacock-cichlid', 'mbuna', 'dolphin-cichlid', 'kribensis',
    'neon-tetra', 'cardinal-tetra', 'rummy-nose-tetra', 'black-phantom-tetra',
    'bleeding-heart-tetra', 'ember-tetra', 'lemon-tetra', 'black-neon-tetra',
    'green-neon-tetra', 'congo-tetra', 'red-eye-tetra', 'serpae-tetra',
    'silver-tip-tetra', 'penguin-tetra', 'head-and-tail-light-tetra',
    'glass-bloodfin-tetra', 'red-fin-tetra', 'colombian-tetra', 'diamond-tetra',
    'guppy', 'molly', 'platy', 'swordtail',
    'dwarf-gourami', 'pearl-gourami', 'blue-gourami', 'three-spot-gourami',
    'kissing-gourami', 'giant-gourami', 'paradise-fish', 'chocolate-gourami',
    'spotted-gourami', 'opaline-gourami', 'golden-gourami', 'neon-dwarf-gourami',
    'honey-gourami', 'thick-lipped-gourami', 'sparkling-gourami', 
    'moonlight-gourami', 'snakeskin-gourami',
    'clown-loach', 'yo-yo-loach', 'zebra-loach', 'kuhli-loach', 'weather-loach',
    'hillstream-loach', 'bengal-loach', 'emperor-loach', 'skunk-loach',
    'coral-red-penfish', 'cherry-barb', 'tiger-barb', 'rosy-barb', 'gold-barb',
    'odessa-barb', 'zebra-danio', 'pearl-danio', 'leopard-danio', 'giant-danio',
    'celestial-pearl-danio', 'white-cloud-mountain-minnow',
    'rasbora', 'lambchop-rasbora', 'scissortail-rasbora', 'chili-rasbora',
    'mosquito-rasbora', 'phoenix-rasbora', 'dwarf-rasbora', 'emerald-dwarf-rasbora',
    'galaxy-rasbora',
    'otocinclus', 'pleco', 'bristlenose-pleco', 'zebra-pleco', 'clown-pleco',
    'rubber-lip-pleco', 'green-phantom-pleco', 'gold-nugget-pleco', 
    'sailfin-pleco', 'peckoltia', 'corydoras-panda', 'corydoras-aeneus',
    'corydoras-sternbai', 'corydoras-pygmaeus', 'corydoras-habrosus',
    'corydoras-leucomelas', 'corydoras-metae', 'glass-catfish', 
    'upside-down-catfish', 'synodontis', 'banjo-catfish', 'pictus-catfish',
    'redtail-catfish', 'tiger-shovelnose-catfish', 'channel-catfish',
    'talking-catfish',
    'betta', 'goldfish', 'koi', 'pencilfish', 'hatchetfish', 'rainbow-shark',
    'red-tailed-shark', 'bala-shark', 'roseline-shark', 'algae-eater', 
    'flying-fox', 'pacu', 'black-pacu',
    'dollfish', 'mono', 'scat', 'mudskipper', 'archerfish', 'foxface-rabbitfish',
    'spinefoot'
}

def find_species_blocks(content):
    """Find all species blocks with proper braces."""
    blocks = []
    depth = 0
    start = None
    
    for i, char in enumerate(content):
        if char == '{':
            if depth == 0:
                start = i
            depth += 1
        elif char == '}':
            depth -= 1
            if depth == 0 and start is not None:
                blocks.append(content[start:i+1])
                start = None
    
    return blocks

def split_files():
    """Split the tropical fish file properly."""
    
    # Read the current (broken) fish-tropical.js to get species data
    with open('/Users/svetik/Projects/bird-fish-h/fish-tropical.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all species blocks
    blocks = find_species_blocks(content)
    
    saltwater_blocks = []
    freshwater_blocks = []
    
    for block in blocks:
        # Extract species ID
        id_match = re.search(r"id:\s*'([^']+)'", block)
        if id_match:
            species_id = id_match.group(1)
            if species_id in freshwater_species:
                freshwater_blocks.append(block)
            else:
                saltwater_blocks.append(block)
    
    # Create saltwater file (fish-tropical.js)
    saltwater_header = '// Saltwater Tropical Fish Species Data (Ocean/Marine)\nexport const tropicalFish = ['
    saltwater_content = saltwater_header + '\n    ' + ',\n    '.join(saltwater_blocks) + '\n];\n'
    with open('/Users/svetik/Projects/bird-fish-h/fish-tropical.js', 'w', encoding='utf-8') as f:
        f.write(saltwater_content)
    
    # Create freshwater file (fish-river-tropical.js)
    river_header = '// River Tropical Fish Species Data (Freshwater)\nexport const riverTropicalFish = ['
    freshwater_content = river_header + '\n    ' + ',\n    '.join(freshwater_blocks) + '\n];\n'
    with open('/Users/svetik/Projects/bird-fish-h/fish-river-tropical.js', 'w', encoding='utf-8') as f:
        f.write(freshwater_content)
    
    print(f"✓ Created fish-tropical.js with {len(saltwater_blocks)} saltwater species")
    print(f"✓ Created fish-river-tropical.js with {len(freshwater_blocks)} freshwater species")
    print("\nDone!")

if __name__ == '__main__':
    split_files()
