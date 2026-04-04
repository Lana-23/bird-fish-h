#!/bin/bash
# Generate thumbnails for all species images using macOS sips
# Creates 300x200px thumbnails in assets/thumbnails/ directory

THUMBNAIL_WIDTH=300
THUMBNAIL_HEIGHT=200
ASSETS_DIR="assets/images"
THUMBNAILS_DIR="assets/thumbnails"

# Create thumbnails directory
mkdir -p "$THUMBNAILS_DIR"

# Counter
total=0
success=0
error=0

echo "🖼️  Generating thumbnails for all species images..."
echo "📐 Thumbnail size: ${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}px"
echo ""

# Find all images
find "$ASSETS_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | while read -r image_path; do
    total=$((total + 1))
    
    # Get relative path from assets/images
    rel_path="${image_path#$ASSETS_DIR/}"
    
    # Create thumbnail path (replace extension with .jpg)
    thumb_path="${THUMBNAILS_DIR}/${rel_path%.*}.jpg"
    
    # Create subdirectories if needed
    mkdir -p "$(dirname "$thumb_path")"
    
    echo "[$total] Processing $rel_path"
    
    # Get original file size
    original_size=$(du -k "$image_path" | cut -f1)
    
    # Generate thumbnail using sips
    if sips -Z "${THUMBNAIL_WIDTH}" "${THUMBNAIL_HEIGHT}" "$image_path" --out "$thumb_path" >/dev/null 2>&1; then
        success=$((success + 1))
        thumb_size=$(du -k "$thumb_path" | cut -f1)
        if [ "$original_size" -gt 0 ]; then
            savings=$(( (original_size - thumb_size) * 100 / original_size ))
            echo "  ✓ ${original_size}KB → ${thumb_size}KB (${savings}% smaller)"
        else
            echo "  ✓ Created thumbnail"
        fi
    else
        error=$((error + 1))
        echo "  ✗ Error processing $rel_path"
    fi
done

echo ""
echo "=================================================="
echo "✓ Thumbnails generated: $success"
echo "✗ Errors: $error"
echo "📁 Output directory: $THUMBNAILS_DIR"
