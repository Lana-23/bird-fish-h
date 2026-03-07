#!/bin/bash
# Quick download script for bird images using curl
# Usage: ./download_birds_quick.sh

OUTPUT_DIR="./birds-european"
mkdir -p "$OUTPUT_DIR"

# Function to download image
download_bird() {
    local bird_id=$1
    local search_term=$(echo $bird_id | tr '-' ' ')
    local output_file="$OUTPUT_DIR/${bird_id}.jpg"
    
    if [ -f "$output_file" ]; then
        echo "✓ $bird_id: Already exists"
        return
    fi
    
    echo "Downloading $bird_id..."
    
    # Try Wikimedia Commons via duckduckgo image search
    curl -s -L -o "$output_file" \
        "https://loremflickr.com/800/600/${search_term// /,},bird?lock=${#bird_id}" \
        --connect-timeout 10 \
        --max-time 30
    
    if [ -s "$output_file" ] && [ $(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null) -gt 10000 ]; then
        echo "✓ $bird_id: Downloaded"
        sleep 1
    else
        echo "✗ $bird_id: Failed"
        rm -f "$output_file"
    fi
}

# Download first 20 birds as a test
BIRDS=(
    nightingale
    blackcap
    chaffinch
    goldfinch
    house-sparrow
    blackbird
    robin
    skylark
    barn-swallow
    starling
    mallard
    greylag-goose
    black-headed-gull
    arctic-tern
    lapwing
    snipe
    kestrel
    peregrine
    tawny-owl
    puffin
)

echo "Downloading ${#BIRDS[@]} bird images..."
echo "Output directory: $OUTPUT_DIR"
echo "----------------------------------------"

for bird in "${BIRDS[@]}"; do
    download_bird "$bird"
done

echo "----------------------------------------"
echo "Complete! Check $OUTPUT_DIR for images."
