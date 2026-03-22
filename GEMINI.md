# GEMINI.md - LocalAI Agent Project Context

## Project Overview

**LocalAI Agent** is an enterprise-focused website for AI infrastructure and agents. It emphasizes local AI deployment, data privacy, and low-latency performance. The project is built using the **Astro 5.0** framework with the **AstroWind** template.

- **Primary Technologies:** Astro 5.0, Tailwind CSS, TypeScript.
- **Content Management:** Markdown (`.md`) and MDX (`.mdx`) for blog posts and pages.
- **Deployment:** Configured for Vercel (see `vercel.json`) and Netlify (see `netlify.toml`).

## Directory Structure

- `src/assets/`: Images and global styles.
- `src/components/`: Astro components organized by function (common, ui, widgets, blog).
- `src/content/`: Content collection definitions.
- `src/data/post/`: Markdown/MDX files for blog posts.
- `src/layouts/`: Base page layouts (Landing, Page, Markdown).
- `src/pages/`: Website pages and routing logic.
- `src/utils/`: Utility functions for images, permalinks, and more.
- `vendor/`: Template core logic and integrations.

## Key Configuration Files

- `src/config.yaml`: Global site settings, SEO metadata, and feature toggles.
- `src/navigation.ts`: Header and footer navigation links.
- `astro.config.ts`: Astro framework and integration settings.
- `tailwind.config.js`: Tailwind CSS configuration.

## Building and Running

| Task                  | Command           |
| :-------------------- | :---------------- |
| **Development**       | `npm run dev`     |
| **Build**             | `npm run build`   |
| **Preview Build**     | `npm run preview` |
| **Lint & Type Check** | `npm run check`   |
| **Auto-fix Issues**   | `npm run fix`     |

## Development Conventions

- **Blog Content:** New blog posts should be added to `src/data/post/`. Each post requires frontmatter following the schema in `src/content/config.ts` (title, publishDate, image, category, etc.).
- **Images:** Prefer using the `Image` component from `~/components/common/Image.astro` for optimized image delivery.
- **Styling:** Use Tailwind CSS utility classes. Custom styles should ideally be placed in `src/assets/styles/tailwind.css` or within Astro component `<style>` tags.
- **Components:** Follow the existing atomic-like structure:
  - `ui/`: Small reusable UI elements (Buttons, Form elements).
  - `widgets/`: Larger section-level components (Hero, Features, Content blocks).
- **Types:** TypeScript is strictly enforced. Define interfaces in `src/types.d.ts` if needed.
