from PIL import Image
import os

# Load the image
img = Image.open('image.jpg')

# Get dimensions
width, height = img.size

# Crop to square (use the smaller dimension)
size = min(width, height)
left = (width - size) // 2
top = (height - size) // 2
right = left + size
bottom = top + size

# Crop to square
img_square = img.crop((left, top, right, bottom))

# Resize to 400x400 for web
img_final = img_square.resize((400, 400), Image.Resampling.LANCZOS)

# Save as webp for better compression
img_final.save('profile_photo.webp', 'WEBP', quality=85)

print("Profile photo cropped and saved as 'profile_photo.webp'")

# nothing chsnges