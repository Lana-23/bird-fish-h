#!/usr/bin/env python3
"""
Add environment field (ocean/river) to tropical fish species.
"""

import re

# Freshwater species IDs (river/environment = 'river')
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

def add_environment_field(file_path):
    """Add environment field to each species."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all species blocks and add environment field
    species_blocks = []
    pattern = r"(\{\s*\n\s*id:\s*'([^']+)'[^}]*?)(\n\s*\})"
    
    def replace_species(match):
        block = match.group(1)
        species_id = match.group(2)
        closing = match.group(3)
        
        # Check if environment field already exists
        if 'environment:' in block:
            return match.group(0)
        
        # Determine environment
        env = 'river' if species_id in freshwater_species else 'ocean'
        
        # Find where to insert environment field (after category field)
        if "category: 'tropical'," in block:
            # Insert after category
            env_line = f"\n        environment: '{env}',"
            block = block.replace("category: 'tropical',", f"category: 'tropical',{env_line}")
        else:
            # Insert after id as fallback
            env_line = f"\n        environment: '{env}',"
            block = block.replace(f"id: '{species_id}',", f"id: '{species_id}',{env_line}")
        
        return block + closing
    
    # Replace all species blocks
    new_content = re.sub(pattern, replace_species, content, flags=re.DOTALL)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("Environment field added to all tropical fish species!")
    print(f"Freshwater (river) species: {len(freshwater_species)}")
    print(f"Saltwater (ocean) species: {255 - len(freshwater_species)}")

if __name__ == '__main__':
    add_environment_field('/Users/svetik/Projects/bird-fish-h/fish-tropical.js')
