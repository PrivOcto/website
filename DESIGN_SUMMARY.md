# LocalAI Agent Website - Light/Dark Mode Background Design

## Design Overview

This document outlines the background design system for the LocalAI Agent technology website, featuring cohesive light and dark modes with unified card backgrounds.

---

## Color Palette

### Light Mode - "Clean AI Lab"
- **Page Background**: `rgb(248 250 252)` - Ultra-light cool gray
- **Card Background**: `rgb(248 250 252)` - Matches page background
- **Alternative Background**: `rgb(241 245 249)` - Slightly darker for contrast
- **Gradient Start**: `rgb(255 255 255)` - Pure white
- **Gradient End**: `rgb(248 250 252)` - Subtle cool gray

### Dark Mode - "Deep AI Space"
- **Page Background**: `rgb(2 6 23)` - Deep navy black
- **Card Background**: `rgb(2 6 23)` - Matches page background
- **Alternative Background**: `rgb(5 10 30)` - Slightly lighter navy
- **Gradient Start**: `rgb(2 6 23)` - Deep navy black
- **Gradient End**: `rgb(5 10 30)` - Subtle lighter navy

---

## Visual Effects

### Glow Effects
- **Light Mode**: Subtle blue and purple glows (8-6% opacity)
- **Dark Mode**: Enhanced blue and purple glows (15-12% opacity)

### Dot Pattern Overlay
- **Light Mode**: Subtle blue dots (3% opacity, 4px grid)
- **Dark Mode**: More visible blue dots (6% opacity, 4px grid)

---

## Key Design Decisions

### 1. Unified Card Backgrounds
All cards now use the same background color as their parent mode:
- Light mode cards: `bg-card` = page background color
- Dark mode cards: `bg-card-dark` = page background color

This creates a seamless, modern look where cards blend with the page background and are distinguished by borders and shadows instead of contrasting backgrounds.

### 2. Subtle Texture
Added a dot pattern overlay to both modes:
- Creates visual interest without distraction
- Maintains professional tech aesthetic
- Provides subtle depth to flat backgrounds

### 3. Gradient Backgrounds
Implemented smooth vertical gradients:
- Light mode: White to cool gray (top to bottom)
- Dark mode: Deep navy to lighter navy (top to bottom)
- Adds depth and dimension

### 4. Glow Effects
Radial gradient glows positioned at top:
- Primary glow: Blue (centered)
- Accent glow: Purple (right side)
- Creates ambient lighting effect

### 5. Card Styling
Cards are distinguished by:
- Semi-transparent backgrounds (`bg-card/50` or `bg-card/80`)
- Backdrop blur effect
- Subtle borders (`border-gray-200/30` or `border-gray-700/30`)
- Hover effects with primary color accent
- Smooth transitions (300ms)

---

## Files Modified

1. **`src/components/CustomStyles.astro`**
   - Updated CSS variables for light/dark mode backgrounds
   - Configured glow effects and gradients

2. **`src/assets/styles/tailwind.css`**
   - Enhanced `.bg-page`, `.bg-dark`, `.bg-light` utilities
   - Added dot pattern overlay
   - Improved `.bg-gradient-page` and `.bg-gradient-page-dark`

3. **`src/layouts/Layout.astro`**
   - Changed body class to use `bg-page dark:bg-dark`
   - Added `min-h-screen` for full-height backgrounds

4. **`src/components/ui/Background.astro`**
   - Updated to use `bg-card dark:bg-card-dark`
   - Ensures consistent card backgrounds

5. **`src/components/widgets/Pricing.astro`**
   - Enhanced pricing cards with unified backgrounds
   - Added hover effects and transitions

6. **`src/pages/index.astro`**
   - Updated Vision Section card styling
   - Enhanced "Why Local AI" benefit cards with glassmorphism effect

---

## Usage Guidelines

### For New Components

Use these utility classes for consistent backgrounds:

```html
<!-- Page background -->
<div class="bg-page dark:bg-dark">

<!-- Card with unified background -->
<div class="bg-card/50 dark:bg-card-dark/50 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30">

<!-- Gradient page background -->
<div class="bg-gradient-page dark:bg-gradient-page-dark">
```

### For Custom Sections

```astro
<section class="py-16 md:py-24 bg-page dark:bg-dark">
  <div class="container mx-auto px-4">
    <!-- Content with card styling -->
    <div class="bg-card/80 dark:bg-card-dark/80 backdrop-blur-sm rounded-2xl p-8">
      <!-- Card content -->
    </div>
  </div>
</section>
```

---

## Accessibility

- Maintains sufficient contrast ratios for text readability
- Light mode: Dark text on light background (WCAG AA compliant)
- Dark mode: Light text on dark background (WCAG AA compliant)
- Hover states provide clear visual feedback
- Smooth transitions reduce jarring changes

---

## Browser Support

- CSS custom properties (variables)
- Backdrop blur (with fallbacks)
- CSS gradients
- Modern browsers (Chrome, Firefox, Safari, Edge)

---

## Future Enhancements

1. **Animation**: Consider subtle background animations for hero sections
2. **Theme Variants**: Add additional color themes (purple, green, etc.)
3. **Reduced Motion**: Respect `prefers-reduced-motion` for glow effects
4. **Performance**: Optimize blur effects for lower-end devices

---

*Design created for LocalAI Agent - Enterprise AI Solutions*
