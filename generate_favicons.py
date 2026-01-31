#!/usr/bin/env python3
"""
Generate favicon PNG files from SVG logo
Requires: pip install cairosvg pillow
"""

import os
from pathlib import Path

try:
    import cairosvg
    from PIL import Image
    import io
except ImportError:
    print("Installing required packages...")
    os.system("pip install cairosvg pillow")
    import cairosvg
    from PIL import Image
    import io

def svg_to_png(svg_path, output_path, size):
    """Convert SVG to PNG at specified size"""
    png_data = cairosvg.svg2png(
        url=str(svg_path),
        output_width=size,
        output_height=size
    )
    
    # Open with PIL to ensure proper format
    img = Image.open(io.BytesIO(png_data))
    
    # Convert to RGBA if not already
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    
    # Save
    img.save(output_path, 'PNG')
    print(f"✓ Generated {output_path} ({size}x{size})")

def generate_ico(png_path, ico_path):
    """Generate ICO file from PNG"""
    img = Image.open(png_path)
    img.save(ico_path, format='ICO', sizes=[(32, 32), (64, 64)])
    print(f"✓ Generated {ico_path}")

def main():
    # Paths
    svg_path = Path('docs/assets/logo.svg')
    assets_dir = Path('docs/assets')
    
    if not svg_path.exists():
        print(f"Error: {svg_path} not found!")
        return
    
    # Create assets directory if it doesn't exist
    assets_dir.mkdir(parents=True, exist_ok=True)
    
    print("Generating favicons from SVG logo...")
    print("-" * 50)
    
    # Generate various sizes
    sizes = {
        'favicon-16x16.png': 16,
        'favicon-32x32.png': 32,
        'apple-touch-icon.png': 180,
        'android-chrome-192x192.png': 192,
        'android-chrome-512x512.png': 512,
    }
    
    for filename, size in sizes.items():
        output_path = assets_dir / filename
        svg_to_png(svg_path, output_path, size)
    
    # Generate favicon.ico from 32x32 PNG
    generate_ico(assets_dir / 'favicon-32x32.png', assets_dir / 'favicon.ico')
    
    print("-" * 50)
    print("✅ All favicons generated successfully!")
    print("\nGenerated files:")
    for filename in sizes.keys():
        print(f"  - docs/assets/{filename}")
    print(f"  - docs/assets/favicon.ico")

if __name__ == '__main__':
    main()
