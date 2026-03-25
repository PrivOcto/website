# Blog Images Directory

Place all blog post images in this directory.

## ⚠️ Important: Image Requirements

**Your blog images MUST be:**

- **Size:** 1200 × 675 pixels (16:9 aspect ratio)
- **Format:** WebP (recommended) or JPG/PNG
- **File Size:** Under 200KB
- **Location:** This directory (`src/assets/images/blog/`)

If your images don't match these requirements, they will be cropped incorrectly!

See full specifications: [BLOG_IMAGE_SPECIFICATIONS.md](../../../BLOG_IMAGE_SPECIFICATIONS.md)

---

## Supported Formats

- `.webp` (recommended for best performance)
- `.jpg` / `.jpeg`
- `.png`
- `.gif`
- `.svg`

---

## Usage in Blog Posts

### Step 1: Add Image to This Directory

```
src/assets/images/blog/
└── your-post-image.webp
```

### Step 2: Reference in Frontmatter

```markdown
---
title: 'Your Blog Post'
image: '~/assets/images/blog/your-post-image.webp'
---
```

### ⚠️ Common Mistakes

**Wrong:**

```markdown
❌ image: ./src/assets/images/blog/image.webp # Don't use ./
❌ image: /assets/images/blog/image.webp # Don't use absolute path
❌ image: ~/src/assets/images/blog/image.webp # Don't add /src/
```

**Correct:**

```markdown
✅ image: ~/assets/images/blog/image.webp
```

---

## Quick Resize Guide

### Using Canva (Free)

1. Go to [Canva.com](https://canva.com)
2. Create design → Custom size → 1200 × 675 px
3. Add your image
4. Download → WebP format

### Using Online Tools

- [Bulk Resize Photos](https://bulkresizephotos.com) - Batch resize
- [Squoosh](https://squoosh.app) - Optimize and convert
- [Adobe Express](https://adobe.com/express) - Quick resize

---

## Best Practices

1. **Use WebP format** - Better compression and quality
2. **Optimize images** - Keep file sizes under 200KB when possible
3. **Descriptive names** - Use kebab-case: `my-blog-image.webp`
4. **Consistent dimensions** - 1200×675px for featured images
5. **Center important content** - Edges may be cropped on some displays

---

## Troubleshooting

### Image Not Showing

**Check:**

- [ ] Image file exists in `src/assets/images/blog/`
- [ ] Path starts with `~/assets/images/blog/`
- [ ] File extension matches (.webp, .jpg, etc.)
- [ ] No typos in filename

### Image Looks Cropped

**Solution:**

- Resize image to 1200×675px (16:9 ratio)
- Use online tools listed above

### Image Quality Poor

**Solution:**

- Use minimum 1200px width
- Export at 80-100% quality
- Check original resolution

---

## Example Blog Post Structure

```markdown
---
publishDate: 2026-03-14
author: Your Name
title: 'Your Blog Post Title'
excerpt: 'Brief description of your post'
image: '~/assets/images/blog/your-image.webp'
category: Tutorials
tags:
  - AI
  - Tutorial
metadata:
  canonical: https://privocto.com/blog/your-post
---

## Your Content Here

Write your blog post content...
```

---

_For detailed specifications, see [BLOG_IMAGE_SPECIFICATIONS.md](../../../BLOG_IMAGE_SPECIFICATIONS.md)_
