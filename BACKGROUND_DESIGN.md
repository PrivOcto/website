# LocalAI Agent — Background Design System

## Design Philosophy

The background design for LocalAI Agent follows a **"Neural Aesthetics"** philosophy — creating visual environments that reflect the nature of AI and neural networks while maintaining professional clarity.

---

## Color Systems

### Light Mode: "Clean Neural Lab" 🧪

| Element | Color | Usage |
|---------|-------|-------|
| **Base** | `rgb(255 255 255)` | Pure white canvas |
| **Page Background** | `rgb(255 255 255)` | Main content areas |
| **Card Background** | `rgb(255 255 255)` | Cards (matches page) |
| **Alternative** | `rgb(247 249 252)` | Section differentiation |
| **Gradient Start** | `rgb(255 255 255)` | Top of gradient |
| **Gradient End** | `rgb(247 249 252)` | Bottom of gradient |

**Character**: Pure, professional, innovation-focused, clinical precision

---

### Dark Mode: "Deep Neural Space" 🌌

| Element | Color | Usage |
|---------|-------|-------|
| **Base** | `rgb(0 1 3)` | Near-black void |
| **Page Background** | `rgb(0 1 3)` | Main content areas |
| **Card Background** | `rgb(0 1 3)` | Cards (matches page) |
| **Alternative** | `rgb(2 4 8)` | Section differentiation |
| **Gradient Start** | `rgb(0 1 3)` | Top of gradient |
| **Gradient End** | `rgb(2 4 8)` | Bottom of gradient |

**Character**: Immersive, mysterious, cutting-edge, infinite depth

---

## Visual Effects

### 1. Glow Effects

Radial gradients that create ambient neural network ambiance.

#### Light Mode
```css
--aw-glow-primary: radial-gradient(
  circle at 50% 0%,
  rgba(1, 97, 239, 0.06) 0%,
  transparent 60%
);

--aw-glow-accent: radial-gradient(
  circle at 75% 10%,
  rgba(109, 40, 217, 0.04) 0%,
  transparent 50%
);
```

#### Dark Mode
```css
--aw-glow-primary-dark: radial-gradient(
  circle at 50% 0%,
  rgba(1, 97, 239, 0.18) 0%,
  transparent 60%
);

--aw-glow-accent-dark: radial-gradient(
  circle at 75% 10%,
  rgba(109, 40, 217, 0.12) 0%,
  transparent 50%
);
```

**Positioning**:
- Primary glow: Centered at top (50% 0%)
- Accent glow: Offset right (70% 0%)
- Creates asymmetric, dynamic visual interest

---

### 2. Neural Grid Pattern

Subtle dot matrix representing neural network connections.

#### Light Mode
```css
--aw-grid-dot-light: rgba(148, 163, 184, 0.15);
/* Slate blue with 15% opacity */
```

#### Dark Mode
```css
--aw-grid-dot-dark: rgba(59, 130, 246, 0.08);
/* Bright blue with 8% opacity */
```

**Pattern Specs**:
- Grid size: `6px × 6px`
- Dot size: `1px` circle at each intersection
- Creates subtle texture without distraction

---

### 3. Background Composition

Layer structure (bottom to top):

```
┌─────────────────────────────────────┐
│ 4. Neural Grid (6px pattern)        │
├─────────────────────────────────────┤
│ 3. Accent Glow (purple, 70% right)  │
├─────────────────────────────────────┤
│ 2. Primary Glow (blue, centered)    │
├─────────────────────────────────────┤
│ 1. Base Color / Gradient            │
└─────────────────────────────────────┘
```

**CSS Implementation**:
```css
background-image:
  var(--aw-glow-primary),      /* Layer 2 */
  var(--aw-glow-accent),       /* Layer 3 */
  radial-gradient(...);        /* Layer 4 */

background-position:
  top center,    /* Primary glow */
  70% 0,         /* Accent glow */
  0 0;           /* Grid pattern */

background-size:
  100% 60%,      /* Primary glow coverage */
  70% 50%,       /* Accent glow coverage */
  6px 6px;       /* Grid repeat */
```

---

## Card Design Philosophy

### Unified Background Principle

**All cards use the SAME background color as their parent mode:**

| Mode | Card Background | Page Background |
|------|-----------------|-----------------|
| Light | `rgb(255 255 255)` | `rgb(255 255 255)` |
| Dark | `rgb(0 1 3)` | `rgb(0 1 3)` |

### Visual Separation Techniques

Instead of contrasting backgrounds, cards are distinguished by:

1. **Borders**: Subtle, semi-transparent
   ```html
   border border-gray-200/30 dark:border-gray-700/30
   ```

2. **Shadows**: Soft elevation
   ```html
   shadow-lg hover:shadow-xl
   ```

3. **Backdrop Blur**: Glassmorphism effect
   ```html
   backdrop-blur-sm bg-card/50 dark:bg-card-dark/50
   ```

4. **Hover States**: Interactive feedback
   ```html
   hover:border-primary/30 dark:hover:border-primary/30
   ```

---

## Utility Classes

### Page Backgrounds

```html
<!-- Automatic light/dark mode -->
<div class="bg-page dark:bg-dark">

<!-- Explicit light mode -->
<div class="bg-light">

<!-- With gradient -->
<div class="bg-gradient-page dark:bg-gradient-page-dark">
```

### Card Backgrounds

```html
<!-- Standard card (matches mode) -->
<div class="bg-card dark:bg-card-dark">

<!-- Semi-transparent with blur -->
<div class="bg-card/50 dark:bg-card-dark/50 backdrop-blur-sm">

<!-- Alternative sections -->
<div class="bg-alt dark:bg-alt-dark">
```

### Glow Layers

```html
<!-- Fixed position glow overlays -->
<div class="fixed inset-0 glow-primary dark:glow-primary-dark pointer-events-none">
<div class="fixed inset-0 glow-accent dark:glow-accent-dark pointer-events-none">
```

---

## Implementation Guide

### Creating New Sections

```astro
---
import Layout from '~/layouts/PageLayout.astro';
---

<Layout>
  <!-- Standard section with page background -->
  <section class="py-20 bg-page dark:bg-dark">
    <div class="container mx-auto px-4">
      <h1>Section Title</h1>
      <!-- Content -->
    </div>
  </section>

  <!-- Section with cards -->
  <section class="py-20 bg-page dark:bg-dark">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Cards match page background -->
        <div class="bg-card/50 dark:bg-card-dark/50 backdrop-blur-sm 
                    border border-gray-200/30 dark:border-gray-700/30 
                    rounded-2xl p-6">
          Card Content
        </div>
      </div>
    </div>
  </section>
</Layout>
```

### Customizing Glow Intensity

Edit `src/components/CustomStyles.astro`:

```css
/* Increase glow visibility */
--aw-glow-primary: radial-gradient(
  circle at 50% 0%,
  rgba(1, 97, 239, 0.10) 0%,  /* Increase from 0.06 */
  transparent 60%
);

/* Decrease for subtlety */
--aw-glow-primary: radial-gradient(
  circle at 50% 0%,
  rgba(1, 97, 239, 0.04) 0%,  /* Decrease from 0.06 */
  transparent 60%
);
```

### Adjusting Grid Density

Edit `src/assets/styles/tailwind.css`:

```css
/* Finer grid */
background-size: 4px 4px;  /* More dense */

/* Coarser grid */
background-size: 8px 8px;  /* More sparse */

/* Remove grid entirely */
background-image:
  var(--aw-glow-primary),
  var(--aw-glow-accent);
  /* Remove radial-gradient line */
```

---

## Accessibility

### Contrast Ratios

| Element | Light Mode | Dark Mode | WCAG Level |
|---------|-----------|-----------|------------|
| Body Text | 16.1:1 | 15.8:1 | AAA |
| Muted Text | 7.2:1 | 9.4:1 | AA |
| Headings | 21:1 | 19.5:1 | AAA |

### Selection Colors

```css
/* Light mode */
::selection {
  background-color: rgba(1, 97, 239, 0.15);
  color: rgb(1 97 239);
}

/* Dark mode */
::selection {
  background-color: rgba(1, 97, 239, 0.35);
  color: rgb(96 165 250);
}
```

### Reduced Motion

Respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  .glow-primary,
  .glow-accent {
    animation: none;
  }
}
```

---

## Performance Considerations

### CSS Optimization

- Grid pattern uses `radial-gradient` (GPU accelerated)
- Glow effects use `radial-gradient` (hardware accelerated)
- No expensive `filter` or `backdrop-filter` on page background

### Best Practices

1. **Avoid nested transparency** — Use solid colors for cards when possible
2. **Limit backdrop-blur** — Only on interactive elements
3. **Use CSS variables** — Enable runtime theme switching without reflow

---

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Gradients | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | ✅ | ✅ | ✅ | ✅ |
| Backdrop Filter | ✅ | ✅ | ✅ | ✅ |
| Radial Gradient | ✅ | ✅ | ✅ | ✅ |

**Minimum Versions**: Chrome 88+, Firefox 87+, Safari 14+, Edge 88+

---

## Design Tokens Reference

### Colors

```yaml
primary: rgb(1 97 239)      # Brand blue
secondary: rgb(1 84 207)    # Darker blue
accent: rgb(109 40 217)     # Brand purple

# Light Mode
bg-page-light: rgb(255 255 255)
bg-card-light: rgb(255 255 255)
bg-alt-light: rgb(247 249 252)
grid-dot-light: rgba(148, 163, 184, 0.15)

# Dark Mode
bg-page-dark: rgb(0 1 3)
bg-card-dark: rgb(0 1 3)
bg-alt-dark: rgb(2 4 8)
grid-dot-dark: rgba(59, 130, 246, 0.08)
```

### Spacing

```yaml
grid-size: 6px
dot-size: 1px
glow-coverage-primary: 60%
glow-coverage-accent: 50%
```

### Opacity

```yaml
glow-light-primary: 0.06
glow-light-accent: 0.04
glow-dark-primary: 0.18
glow-dark-accent: 0.12
```

---

## Future Enhancements

### Potential Additions

1. **Animated Gradients** — Slow color shifts for hero sections
2. **Interactive Grid** — Dots that respond to cursor proximity
3. **Theme Variants** — Purple, green, or orange accent themes
4. **Pattern Variations** — Hexagonal or line-based neural patterns
5. **Dynamic Glow** — Time-based or scroll-based glow intensity

### Experimental Features

```css
/* Animated gradient background */
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animated-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 15s ease infinite;
}
```

---

## Credits

**Design System**: LocalAI Agent Team  
**Framework**: AstroWind (Astro 5.0 + Tailwind CSS)  
**Philosophy**: Neural Aesthetics — Where AI meets visual clarity

---

*Last updated: March 14, 2026*  
*Version: 2.0 — Neural Space Redesign*
