#!/usr/bin/env python3
"""
Remove duplicate fish entries from fish-tropical.js
Keeps the first occurrence of each fish ID
"""

import re

def remove_duplicates():
    with open('fish-tropical.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the export array content
    match = re.search(r'export const tropicalFish = \[(.*?)\];', content, re.DOTALL)
    if not match:
        print("Error: Could not find tropicalFish export")
        return
    
    array_content = match.group(1)
    
    # Split by fish entries (each starts with {)
    # Find all fish objects
    fish_pattern = r'\{[^{}]*(?:\{[^{}]*\}[^{}]*)*[^{}]*\}'
    fish_entries = re.findall(fish_pattern, array_content, re.DOTALL)
    
    print(f"Found {len(fish_entries)} fish entries")
    
    # Track seen IDs and keep unique entries
    seen_ids = set()
    unique_entries = []
    duplicate_count = 0
    
    for entry in fish_entries:
        id_match = re.search(r"id:\s*'([^']+)'", entry)
        if id_match:
            fish_id = id_match.group(1)
            if fish_id in seen_ids:
                duplicate_count += 1
                print(f"  Duplicate removed: {fish_id}")
            else:
                seen_ids.add(fish_id)
                unique_entries.append(entry)
        else:
            # No ID, keep it (might be comment or other)
            unique_entries.append(entry)
    
    # Rebuild the file
    header = content[:match.start()]
    footer = content[match.end():]
    
    new_array_content = '\n    '.join(unique_entries)
    new_content = header + f'export const tropicalFish = [\n    {new_array_content}\n];' + footer
    
    with open('fish-tropical.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"\nDone!")
    print(f"Unique entries: {len(unique_entries)}")
    print(f"Duplicates removed: {duplicate_count}")

if __name__ == '__main__':
    remove_duplicates()
