# Blog Images Directory

Place all blog post images in this directory.

## Supported Formats
- `.webp` (recommended for best performance)
- `.jpg` / `.jpeg`
- `.png`
- `.gif`
- `.svg`

## Usage in Blog Posts

```markdown
---
title: "Your Blog Post"
image: ./path/to/your-image.webp
---

![Alt text](~/assets/images/blog/your-image.webp)
```

Or in Astro components:

```astro
---
import blogImage from '~/assets/images/blog/your-image.webp';
---

<Image src={blogImage} alt="Description" />
```

## Best Practices

1. **Use WebP format** - Better compression and quality
2. **Optimize images** - Keep file sizes under 200KB when possible
3. **Descriptive names** - Use kebab-case: `my-blog-image.webp`
4. **Consistent dimensions** - Recommended: 1200×630px for featured images
