#!/usr/bin/env python3
from PIL import Image, ImageDraw
import math
import random

# Create a 64x64 transparent image
size = 64
img = Image.new('RGBA', (size, size), color=(0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Color scheme
background_color = (79, 70, 229, 220)  # indigo-600
node_colors = [
    (139, 92, 246),    # purple-500
    (96, 165, 250),    # blue-400
    (167, 139, 250),   # purple-400
    (236, 72, 153),    # pink-600
]
connection_color = (255, 255, 255, 150)  # semi-transparent white

# Draw background circle
draw.ellipse([(4, 4), (size-4, size-4)], fill=background_color)

# Define node positions (3 layers)
nodes = []

# Input layer (3 nodes)
for i in range(3):
    y_pos = size // 5 + i * size // 4
    nodes.append((size // 4, y_pos))

# Hidden layer (4 nodes)
for i in range(4):
    y_pos = size // 6 + i * size // 5
    nodes.append((size // 2, y_pos))

# Output layer (2 nodes)
for i in range(2):
    y_pos = size // 3 + i * size // 3
    nodes.append((3 * size // 4, y_pos))

# Draw connections first (so they're behind nodes)
# Connect each node in input layer to each node in hidden layer
for i in range(3):
    for j in range(3, 7):
        draw.line([nodes[i], nodes[j]], fill=connection_color, width=1)

# Connect each node in hidden layer to each node in output layer
for i in range(3, 7):
    for j in range(7, 9):
        draw.line([nodes[i], nodes[j]], fill=connection_color, width=1)

# Draw nodes
for i, (x, y) in enumerate(nodes):
    color = node_colors[i % len(node_colors)]
    radius = 4 if i % 3 == 0 else 3
    draw.ellipse([(x-radius, y-radius), (x+radius, y+radius)], fill=color)

# Add some "activation" glow to a few nodes
for _ in range(3):
    node_idx = random.randint(0, len(nodes)-1)
    x, y = nodes[node_idx]
    radius = 6
    # Draw a glow effect
    for r in range(radius, 2, -1):
        alpha = 100 - r * 15
        if alpha < 0:
            alpha = 0
        glow_color = (*node_colors[node_idx % len(node_colors)][:3], alpha)
        draw.ellipse([(x-r, y-r), (x+r, y+r)], fill=glow_color)

# Save the favicon in multiple sizes (16x16 is standard minimum)
img_16 = img.resize((16, 16), Image.LANCZOS)
img_32 = img.resize((32, 32), Image.LANCZOS)
img_64 = img.copy()

# Save as ICO file
img_16.save('temp_favicon/neural_network_favicon.ico', sizes=[(16, 16), (32, 32), (64, 64)], 
           append_images=[img_32, img_64])

print("Favicon created at temp_favicon/neural_network_favicon.ico") 