#!/usr/bin/env python3
"""
Fix missing commas between array objects in fish-tropical.js
"""

import re

def fix_commas():
    with open('fish-tropical.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern: } followed by newline(s) and { should be },\n    {
    # Fix: replace "}\n    {" with "},\n    {"
    fixed = re.sub(r'\}\n    \{', '},\n    {', content)
    
    with open('fish-tropical.js', 'w', encoding='utf-8') as f:
        f.write(fixed)
    
    print("Fixed missing commas between array objects")

if __name__ == '__main__':
    fix_commas()
