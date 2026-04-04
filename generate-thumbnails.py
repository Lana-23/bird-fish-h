#!/usr/bin/env python3
"""
Generate thumbnails for all species images to speed up initial page load.
Creates 300x200px thumbnails in assets/thumbnails/ directory.
"""

import os
from PIL import Image
import sys

# Configuration
THUMBNAIL_SIZE = (300, 200)  # Width x Height for grid cards
THUMBNAIL_QUALITY = 85  # JPEG quality (0-100)
ASSETS_DIR = 'assets/images'
THUMBNAILS_DIR = 'assets/thumbnails'

def create_thumbnail(image_path, output_path):
    """Create a thumbnail for a single image."""
    try:
        with Image.open(image_path) as img:
            # Convert to RGB if necessary (for PNG with alpha)
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')
            
            # Create thumbnail with smart cropping
            img.thumbnail(THUMBNAIL_SIZE, Image.Resampling.LANCZOS)
            
            # Center crop if needed
            width, height = img.size
            target_width, target_height = THUMBNAIL_SIZE
            
            if width != target_width or height != target_height:
                left = (width - target_width) // 2
                top = (height - target_height) // 2
                right = left + target_width
                bottom = top + target_height
                img = img.crop((left, top, right, bottom))
            
            # Save thumbnail
            img.save(output_path, 'JPEG', quality=THUMBNAIL_QUALITY, optimize=True)
            return True
    except Exception as e:
        print(f"  ✗ Error processing {image_path}: {e}")
        return False

def get_all_images():
    """Get all image paths from assets/images directory."""
    images = []
    
    if not os.path.exists(ASSETS_DIR):
        print(f"Error: {ASSETS_DIR} directory not found")
        return []
    
    for root, dirs, files in os.walk(ASSETS_DIR):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                full_path = os.path.join(root, file)
                # Create relative path from assets/images
                rel_path = os.path.relpath(full_path, ASSETS_DIR)
                images.append(rel_path)
    
    return images

def generate_thumbnails():
    """Generate thumbnails for all images."""
    # Create thumbnails directory
    os.makedirs(THUMBNAILS_DIR, exist_ok=True)
    
    # Get all images
    images = get_all_images()
    
    if not images:
        print("No images found to process")
        return
    
    print(f"Found {len(images)} images to process")
    
    success_count = 0
    error_count = 0
    
    for i, rel_path in enumerate(images, 1):
        print(f"[{i}/{len(images)}] Processing {rel_path}")
        
        input_path = os.path.join(ASSETS_DIR, rel_path)
        # Create thumbnail path (replace extension with .jpg)
        thumb_path = os.path.splitext(rel_path)[0] + '.jpg'
        output_path = os.path.join(THUMBNAILS_DIR, thumb_path)
        
        # Create subdirectories if needed
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        if create_thumbnail(input_path, output_path):
            success_count += 1
            # Show file size savings
            original_size = os.path.getsize(input_path)
            thumb_size = os.path.getsize(output_path)
            savings = (1 - thumb_size / original_size) * 100
            print(f"  ✓ {original_size // 1024}KB → {thumb_size // 1024}KB ({savings:.0f}% smaller)")
        else:
            error_count += 1
    
    print(f"\n{'='*50}")
    print(f"✓ Thumbnails generated: {success_count}")
    print(f"✗ Errors: {error_count}")
    print(f"📁 Output directory: {THUMBNAILS_DIR}")

if __name__ == '__main__':
    print("🖼️  Generating thumbnails for all species images...")
    print(f"📐 Thumbnail size: {THUMBNAIL_SIZE[0]}x{THUMBNAIL_SIZE[1]}px")
    print(f"📊 Quality: {THUMBNAIL_QUALITY}%")
    print()
    
    try:
        generate_thumbnails()
    except KeyboardInterrupt:
        print("\n\n⚠️  Cancelled by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n❌ Error: {e}")
        sys.exit(1)
