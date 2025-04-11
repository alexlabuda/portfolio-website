#!/usr/bin/env python3
from PIL import Image, ImageDraw
import math

# Create a 64x64 transparent image
size = 64
img = Image.new('RGBA', (size, size), color=(0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Color scheme - matching the hexagon particles background
primary_color = (139, 92, 246)  # purple-500
secondary_color = (79, 70, 229)  # indigo-600
highlight_color = (167, 139, 250)  # purple-400

# Draw a hexagon
def draw_hexagon(draw, center, size, color, rotation=0):
    points = []
    for i in range(6):
        angle_deg = 60 * i + rotation
        angle_rad = math.pi / 180 * angle_deg
        x = center[0] + size * math.cos(angle_rad)
        y = center[1] + size * math.sin(angle_rad)
        points.append((x, y))
    draw.polygon(points, fill=color)
    return points

# Draw main hexagon
main_hex_points = draw_hexagon(draw, (size//2, size//2), size//2 - 4, primary_color)

# Draw inner hexagon
draw_hexagon(draw, (size//2, size//2), size//3 - 2, secondary_color, rotation=30)

# Draw smaller hexagons around the main one
small_size = size // 8
positions = [
    (size//4, size//4),
    (3*size//4, size//4),
    (3*size//4, 3*size//4),
    (size//4, 3*size//4)
]

for pos in positions:
    draw_hexagon(draw, pos, small_size, highlight_color, rotation=15)

# Add a data connection line
draw.line([(size//4, size//4), (3*size//4, 3*size//4)], fill=highlight_color, width=2)
draw.line([(3*size//4, size//4), (size//4, 3*size//4)], fill=highlight_color, width=2)

# Save the favicon in multiple sizes (16x16 is standard minimum)
img_16 = img.resize((16, 16), Image.LANCZOS)
img_32 = img.resize((32, 32), Image.LANCZOS)
img_64 = img.copy()

# Save as ICO file
img_16.save('temp_favicon/hexagon_favicon.ico', sizes=[(16, 16), (32, 32), (64, 64)], 
           append_images=[img_32, img_64])

print("Favicon created at temp_favicon/hexagon_favicon.ico") 