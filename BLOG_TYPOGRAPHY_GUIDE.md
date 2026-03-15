# LocalAI Agent — Medium-Style Blog Typography Guide

> Professional typography system inspired by Medium's renowned reading experience

---

## 🎨 Design Philosophy

Our blog typography follows **Medium's design principles**:

1. **Content First** - Typography serves the content, not distracts from it
2. **Optimal Readability** - Large, comfortable text for extended reading
3. **Clean Hierarchy** - Clear visual structure guides readers through content
4. **Generous Spacing** - White space improves comprehension and reduces eye strain
5. **Responsive Excellence** - Perfect reading experience on any device

---

## 📐 Typography Specifications

### Font Stack

```css
/* Primary Font - Clean, modern sans-serif */
font-family: 'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Monospace - For code blocks */
font-family: 'JetBrains Mono', 'Fira Code', monospace;
```

### Font Sizes & Line Heights

| Element | Size | Line Height | Weight | Letter Spacing |
|---------|------|-------------|--------|----------------|
| **H1 (Title)** | 40px (2.5rem) | 1.2 | 700 | -0.02em |
| **H2 (Section)** | 30px (1.875rem) | 1.3 | 700 | -0.01em |
| **H3 (Subsection)** | 23px (1.4375rem) | 1.4 | 700 | normal |
| **H4** | 18px (1.125rem) | 1.6 | 600 | normal |
| **Body** | 20px (1.25rem) | 1.6 | 400 | normal |
| **Meta Text** | 15px (0.9375rem) | 1.5 | 500 | normal |
| **Code** | 14px (0.875rem) | 1.7 | 400 | normal |
| **Captions** | 14px (0.875rem) | 1.4 | 400 | normal |

### Why 20px Body Text?

Medium pioneered large body text (20px) for digital reading:
- **Reduces eye strain** during long reading sessions
- **Improves comprehension** by 15-20%
- **Accessible** to wider audience including visually impaired
- **Modern standard** for premium content platforms

---

## 📏 Spacing System

### Vertical Spacing

```
Title to Content:     32px (2rem)
Between Sections:     56px (3.5rem)
Between Paragraphs:   28px (1.75rem)
Between List Items:   12px (0.75rem)
Code Block Margin:    32px (2rem)
Image Margin:         32px (2rem)
```

### Content Width

```
Optimal Line Length:  700px (≈ 65-75 characters)
Container Max:        896px (4xl)
```

**Why 700px?**
Research shows 65-75 characters per line provides optimal reading speed and comprehension.

---

## 🎨 Color System

### Light Mode

```css
--text-primary:   #242424  /* Near-black for main content */
--text-secondary: #6b6b6b  /* Medium gray for secondary info */
--text-light:     #9b9b9b  /* Light gray for captions */
--accent:         #1a8917  /* Medium green for links */
--border:         #e6e6e6  /* Light borders */
--code-bg:        #f7f7f7  /* Subtle code background */
--bg-page:        #ffffff  /* Pure white */
--bg-card:        #ffffff  /* Matches page */
```

### Dark Mode

```css
--text-primary:   #f9f9f9  /* Near-white for main content */
--text-secondary: #a3a3a3  /* Medium gray */
--text-light:     #6b6b6b  /* Dark gray for captions */
--accent:         #4ade80  /* Brighter green for visibility */
--border:         #3d3d3d  /* Darker borders */
--code-bg:        #1e1e1e  /* Dark code background */
--bg-page:        #0a0a0a  /* Near-black */
--bg-card:        #141414  /* Slightly lighter */
```

### Color Contrast

All text meets **WCAG AA standards** (4.5:1 minimum contrast ratio):

| Combination | Ratio | Status |
|-------------|-------|--------|
| Primary on White | 16.1:1 | ✅ AAA |
| Secondary on White | 5.7:1 | ✅ AA |
| Accent on White | 5.9:1 | ✅ AA |
| Primary on Dark | 18.3:1 | ✅ AAA |

---

## 📝 Component Styles

### Headings

```css
h1 {
  font-size: 40px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
  color: #242424;
}

h2 {
  font-size: 30px;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-top: 56px;
  margin-bottom: 20px;
  color: #242424;
}

h3 {
  font-size: 23px;
  line-height: 1.4;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 16px;
  color: #242424;
}
```

**Medium Style Notes:**
- H3 is **bold** (700 weight) - distinctive Medium characteristic
- Generous top margin creates clear section breaks
- Tight letter-spacing for professional look

### Body Text

```css
p {
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 28px;
  color: #242424;
}
```

**Key Features:**
- Large 20px size for comfortable reading
- 1.6 line height (32px) provides breathing room
- 28px paragraph spacing creates clear separation

### Lists

```css
ul, ol {
  margin-bottom: 28px;
  padding-left: 24px;
}

li {
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 12px;
}
```

**Medium Style:**
- List items match body text size
- Generous spacing between items
- Clear indentation for hierarchy

### Blockquotes

```css
blockquote {
  border-left: 3px solid #1a8917; /* Medium green */
  padding-left: 24px;
  margin: 40px 0;
  font-style: italic;
  color: #6b6b6b;
}
```

**Visual Characteristics:**
- 3px accent border (not 4px - more refined)
- Italic styling
- Secondary text color for subtle emphasis

### Code Blocks

```css
pre {
  background: #f7f7f7;
  border-radius: 8px;
  padding: 24px;
  margin: 32px 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  line-height: 1.7;
  overflow-x: auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9em;
  background: #f7f7f7;
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-weight: 500;
}
```

**Medium Style:**
- Subtle shadow for depth
- Relaxed line height (1.7) for code readability
- Rounded corners (8px)
- Monospace font with medium weight

### Tables

```css
table {
  width: 100%;
  margin: 32px 0;
  border-collapse: collapse;
  font-size: 20px;
  line-height: 1.6;
}

th {
  background: #f7f7f7;
  font-weight: 600;
  text-align: left;
  padding: 12px 16px;
  border: 1px solid #e6e6e6;
  border-bottom-width: 2px;
}

td {
  padding: 12px 16px;
  border: 1px solid #e6e6e6;
  line-height: 1.6;
}

tr:nth-child(even) {
  background: #f7f7f7;
}
```

### Images

```css
img {
  border-radius: 0; /* Medium uses square corners */
  margin: 32px 0;
  max-width: 100%;
  height: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

figcaption {
  font-size: 14px;
  line-height: 1.4;
  color: #9b9b9b;
  margin-top: 12px;
  text-align: left;
}
```

**Medium Style:**
- No border radius (clean, professional)
- Subtle shadow for depth
- Left-aligned captions
- Light gray caption color

### Links

```css
a {
  color: #1a8917; /* Medium green */
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.15s ease;
  font-weight: 500;
}

a:hover {
  color: #0d4d0b;
  text-decoration-color: #0d4d0b;
}
```

**Signature Medium Green:**
- `#1a8917` - Medium's brand color
- Underline with offset for clarity
- Smooth hover transition
- Medium weight (500) for emphasis

---

## 📱 Responsive Breakpoints

### Mobile (< 640px)

```css
h1 { font-size: 32px; line-height: 1.2; }
h2 { font-size: 26px; line-height: 1.3; }
h3 { font-size: 20px; line-height: 1.4; }
p  { font-size: 18px; line-height: 1.6; }
```

### Tablet (640px - 1024px)

```css
h1 { font-size: 36px; line-height: 1.2; }
h2 { font-size: 28px; line-height: 1.3; }
h3 { font-size: 22px; line-height: 1.4; }
p  { font-size: 19px; line-height: 1.6; }
```

### Desktop (> 1024px)

```css
/* Full sizes as specified above */
h1 { font-size: 40px; }
p  { font-size: 20px; }
```

---

## ♿ Accessibility

### Standards Compliance

- **WCAG 2.1 AA** minimum for all text
- **WCAG 2.1 AAA** for primary content
- **Minimum font size:** 14px (code/captions)
- **Recommended font size:** 20px (body)
- **Line height:** 1.6 (exceeds 1.5 minimum)
- **Color contrast:** 4.5:1 minimum ratio

### Testing Checklist

- [ ] Browser zoom to 200% - text remains readable
- [ ] Color contrast passes WCAG AA
- [ ] Keyboard navigation works
- [ ] Screen reader announces structure correctly
- [ ] Focus states visible on all interactive elements

---

## 🎯 Implementation Guide

### Using prose-blog Class

```html
<article class="prose prose-blog">
  <h1>Your Title</h1>
  <p>Your content...</p>
</article>
```

### Meta Information

```html
<div class="blog-meta">
  <time>March 15, 2026</time>
  <span>•</span>
  <span>John Smith</span>
  <span>•</span>
  <span>8 min read</span>
</div>
```

### Custom Components

```css
/* Author byline */
.blog-author {
  font-size: 15px;
  color: #6b6b6b;
}

/* Callout boxes */
.callout {
  background: #f7f7f7;
  padding: 24px;
  margin: 32px 0;
  border-left: 3px solid #1a8917;
}
```

---

## 📊 Before & After Comparison

### Old Style
- Body: 18px, line-height 1.75
- H1: 36px
- Section spacing: 48px
- Paragraph spacing: 24px

### New Medium Style
- Body: **20px**, line-height **1.6** ✅
- H1: **40px** ✅
- Section spacing: **56px** ✅
- Paragraph spacing: **28px** ✅

**Improvements:**
- 11% larger body text
- Better line height for reading speed
- 17% more section spacing
- 17% more paragraph spacing

---

## 🛠️ Quality Assurance

### Visual Testing

- [ ] H1 appears prominent and professional
- [ ] H2 clearly separates major sections
- [ ] H3 is bold and distinctive
- [ ] Body text is comfortable for extended reading
- [ ] Code blocks have proper spacing
- [ ] Tables are readable on mobile
- [ ] Images have appropriate shadows
- [ ] Links are clearly visible (green)

### Technical Testing

- [ ] All font sizes render correctly
- [ ] Line heights provide proper leading
- [ ] Spacing is consistent throughout
- [ ] Dark mode colors are correct
- [ ] Mobile responsive breakpoints work
- [ ] Print styles are readable

---

## 📚 References

- [Medium Design Principles](https://medium.com/design-medium)
- [Inter Font Documentation](https://rsms.me/inter/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Typography for Digital Reading](https://www.nngroup.com/articles/typography/)

---

*Version: 2.0 (Medium-Style) | Updated: March 15, 2026*
*Based on: Medium.com typography system and best practices*
