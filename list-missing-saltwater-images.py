#!/usr/bin/env python3
"""
Generate a list of tropical saltwater fish species without images.
"""

import re
from pathlib import Path

def get_species_from_file():
    """Extract species IDs from fish-tropical.js"""
    species = []
    with open('/Users/svetik/Projects/bird-fish-h/fish-tropical.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all species IDs
    id_pattern = r"id:\s*'([^']+)'"
    matches = re.findall(id_pattern, content)
    
    return matches

def get_existing_images():
    """Get list of existing image files"""
    img_dir = Path('/Users/svetik/Projects/bird-fish-h/assets/images/fish-tropical')
    if not img_dir.exists():
        return []
    
    images = [f.stem for f in img_dir.glob('*.jpg')]
    return images

def main():
    print("=" * 70)
    print("TROPICAL SALTWATER FISH WITHOUT IMAGES")
    print("=" * 70)
    print()
    
    # Get all species
    species = get_species_from_file()
    total_species = len(species)
    
    # Get existing images
    existing_images = get_existing_images()
    total_images = len(existing_images)
    
    # Find species without images
    missing_images = [s for s in species if s not in existing_images]
    missing_count = len(missing_images)
    
    print(f"Total species in database: {total_species}")
    print(f"Total images downloaded:   {total_images}")
    print(f"Species without images:    {missing_count}")
    print()
    print("-" * 70)
    
    if missing_count == 0:
        print("✅ All species have images!")
    else:
        # Group by category for better organization
        categories = {
            'clownfish': [],
            'tang': [],
            'angelfish': [],
            'butterflyfish': [],
            'wrasse': [],
            'triggerfish': [],
            'grouper': [],
            'other': []
        }
        
        for species_id in missing_images:
            if 'clown' in species_id or 'amphiprion' in species_id.lower():
                categories['clownfish'].append(species_id)
            elif 'tang' in species_id or 'surgeon' in species_id or 'acanthurus' in species_id.lower():
                categories['tang'].append(species_id)
            elif 'angelfish' in species_id or 'angel' in species_id:
                categories['angelfish'].append(species_id)
            elif 'butterflyfish' in species_id or 'butterfly' in species_id:
                categories['butterflyfish'].append(species_id)
            elif 'wrasse' in species_id or 'tuskfish' in species_id:
                categories['wrasse'].append(species_id)
            elif 'triggerfish' in species_id or 'trigger' in species_id:
                categories['triggerfish'].append(species_id)
            elif 'grouper' in species_id:
                categories['grouper'].append(species_id)
            else:
                categories['other'].append(species_id)
        
        # Print by category
        for category, species_list in categories.items():
            if species_list:
                print(f"\n{category.upper()} ({len(species_list)}):")
                print("-" * 40)
                for species_id in species_list:
                    # Format the ID nicely
                    nice_name = species_id.replace('-', ' ').title()
                    print(f"  • {species_id}")
        
        print()
        print("-" * 70)
        print()
        print("DOWNLOAD COMMAND:")
        print("  python3 download-200-saltwater.py")
        print()
        print("To download starting from first missing image:")
        print(f"  python3 download-200-saltwater.py --start 0")
        print()
        
        # Save to file
        with open('/Users/svetik/Projects/bird-fish-h/missing-saltwater-images.txt', 'w', encoding='utf-8') as f:
            f.write("Tropical Saltwater Fish Without Images\n")
            f.write("=" * 50 + "\n\n")
            f.write(f"Total species: {total_species}\n")
            f.write(f"Missing images: {missing_count}\n\n")
            
            for category, species_list in categories.items():
                if species_list:
                    f.write(f"\n{category.upper()} ({len(species_list)}):\n")
                    f.write("-" * 40 + "\n")
                    for species_id in species_list:
                        f.write(f"  {species_id}\n")
        
        print(f"List saved to: missing-saltwater-images.txt")

if __name__ == '__main__':
    main()
