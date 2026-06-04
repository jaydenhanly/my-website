# Image Setup Guide

Your portfolio is ready for images! Here's where to add them:

## Profile Image (Headshot)

**Location:** `public/images/profile/headshot.jpg`

Add your professional headshot here. The image will appear:
- Next to the hero text on the homepage
- Displayed as a square (1:1 aspect ratio)

**Recommended specs:**
- Size: 400x400px or larger
- Format: JPG or PNG
- Quality: High resolution (professional headshot)
- File size: < 500KB (compress if needed)

## Project Cover Images

Each project can have a cover image. Add them here:

```
public/images/projects/
  ├── 3shape-2024-cover.jpg
  ├── skybox-2022-cover.jpg
  ├── cphux-2019-cover.jpg
  └── 3p-learning-2016-cover.jpg
```

**Recommended specs:**
- Aspect ratio: 16:9 (landscape)
- Size: 800x450px or larger
- Format: JPG or PNG
- Quality: High resolution screenshots or mockups
- File size: < 1MB per image

## Where Images Appear

1. **Homepage**
   - Hero section: Your headshot (square, 400x400)
   - Projects section: Project cover images (16:9 landscape thumbnails)

2. **Project Detail Pages**
   - Top of page: Large project cover image (16:9 landscape)
   - Helps showcase the work visually

## Getting Images

### Your Headshot
- Use a professional photo from LinkedIn or a recent portfolio
- Ensure good lighting and professional appearance
- Crop to square format (1:1 ratio)

### Project Images
From your Notion workspace, extract images from each project:
1. **3Shape** — Screenshots of the improved interface, metrics dashboard
2. **Skybox** — Product mockups, design system components, final UI
3. **CPHUX** — Event photos, community screenshots, job board interface
4. **3P Learning** — App screenshots, character animations, user interface

Or create modern mockups showing:
- Before/after comparisons
- Key interface screens
- Design system samples
- Team collaboration moments

## How to Add Images

1. **Create the directories** (if not already created):
   ```bash
   mkdir -p public/images/profile
   mkdir -p public/images/projects
   ```

2. **Add your images**:
   - Copy your headshot to `public/images/profile/headshot.jpg`
   - Copy project images to `public/images/projects/`

3. **Site updates automatically**:
   - Once images are in place, they'll display on the site
   - Placeholders will be replaced with actual images

4. **Deploy**:
   ```bash
   git add public/images/
   git commit -m "Add portfolio images"
   vercel --prod
   ```

## Image Optimization

The site uses Next.js Image optimization, so:
- Images are automatically resized for different screen sizes
- WebP format is used when supported by browsers
- Images are lazy-loaded for better performance
- You don't need to pre-optimize — the system does it for you

Just add high-quality originals and let Next.js handle the rest!

## Troubleshooting

**Images not showing?**
- Ensure filenames match exactly: `headshot.jpg`, `3shape-2024-cover.jpg`, etc.
- Check file exists in correct directory
- Clear browser cache and refresh
- Run `npm run build` to regenerate static files

**Image looks blurry?**
- Make sure source image is high resolution (at least 2x the display size)
- For 400x400 display: use 800x800+ source
- For 800x450 display: use 1600x900+ source

**File too large?**
- Compress with tools like TinyPNG, ImageOptim, or similar
- Keep under 500KB for profile, 1MB for projects
- Format as JPG for photos, PNG for screenshots with text

---

Once you add your images, your portfolio will showcase your work with visual impact! 📸
