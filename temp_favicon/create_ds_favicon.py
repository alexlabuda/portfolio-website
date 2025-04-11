#!/usr/bin/env python3
from PIL import Image, ImageDraw
import math

# Create a 64x64 transparent image
size = 64
img = Image.new('RGBA', (size, size), color=(0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Color scheme
background_color = (79, 70, 229)  # indigo-600
points_color = (244, 114, 182)    # pink-500
line_color = (236, 72, 153)       # pink-600
scatter_colors = [(244, 114, 182), (167, 139, 250), (96, 165, 250)]  # pink, indigo, blue

# Draw background
draw.ellipse([(4, 4), (size-4, size-4)], fill=background_color)

# Generate data points for scatter plot
def generate_points(n=8):
    # Generate a simple sine-like curve with some scatter
    points = []
    for i in range(n):
        x = 12 + i * (size - 24) // (n-1)
        # Base y position on a sine curve
        base_y = size // 2 + math.sin(i / (n-1) * 2 * math.pi) * (size // 4 - 4)
        # Add some scatter (data science!)
        y = int(base_y)
        points.append((x, y))
    return points

# Draw points and connect them for a line chart effect
points = generate_points()


# Draw the connecting line first (so it's behind the points)
for i in range(len(points) - 1):
    draw.line([points[i], points[i+1]], fill=line_color, width=2)

# Draw the data points
for i, (x, y) in enumerate(points):
    color_idx = i % len(scatter_colors)
    radius = 4 if i % 3 == 0 else 3  # Vary point sizes
    draw.ellipse([(x-radius, y-radius), (x+radius, y+radius)], 
                 fill=scatter_colors[color_idx])

# Save the favicon in multiple sizes (16x16 is standard minimum)
img_16 = img.resize((16, 16), Image.LANCZOS)
img_32 = img.resize((32, 32), Image.LANCZOS)
img_64 = img.copy()

# Save as ICO file
img_16.save('temp_favicon/data_science_favicon.ico', sizes=[(16, 16), (32, 32), (64, 64)], 
            append_images=[img_32, img_64])

print("Favicon created at temp_favicon/data_science_favicon.ico") 