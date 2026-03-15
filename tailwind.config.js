import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        // Medium-style blog typography colors
        'text-primary': 'var(--aw-color-text-primary)',
        'text-secondary': 'var(--aw-color-text-secondary)',
        'text-light': 'var(--aw-color-text-light)',
        'code-bg': 'var(--aw-color-code-bg)',
        border: 'var(--aw-color-border)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--aw-font-mono, ui-monospace)', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        // Medium-style blog typography sizes
        // Based on Medium's typography system
        'blog-title': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 40px - H1
        'blog-h2': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 30px
        'blog-h3': ['1.4375rem', { lineHeight: '1.4', fontWeight: '700' }], // 23px - Medium uses bold H3
        'blog-body': ['1.25rem', { lineHeight: '1.6' }], // 20px - Medium's signature large body text
        'blog-small': ['0.9375rem', { lineHeight: '1.5' }], // 15px - Meta text
        'blog-code': ['0.875rem', { lineHeight: '1.7' }], // 14px - Code blocks
        'blog-caption': ['0.875rem', { lineHeight: '1.4', color: 'var(--aw-color-text-light)' }], // 14px - Image captions
      },
      fontWeight: {
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      maxWidth: {
        'blog-content': '700px', // Medium's optimal content width
        'blog-prose': '4xl', // 896px - Container max
      },
      lineHeight: {
        'blog-tight': '1.2',
        'blog-normal': '1.6',
        'blog-relaxed': '1.75',
      },
      letterSpacing: {
        'blog-tight': '-0.02em',
        'blog-normal': '-0.01em',
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },

      // Medium-style spacing
      spacing: {
        'section': '3.5rem', // 56px between major sections
        'paragraph': '1.75rem', // 28px between paragraphs (Medium uses generous spacing)
        'meta': '1rem', // 16px for meta information
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant, addUtilities, theme }) => {
      addVariant('intersect', '&:not([no-intersect])');
      
      // Medium-style blog typography utilities
      addUtilities({
        '.prose-blog': {
          '&': {
            maxWidth: theme('maxWidth.blog-content'),
            margin: '0 auto',
            fontFamily: theme('fontFamily.sans'),
          },
          // H1 - Title
          '& h1': {
            fontSize: theme('fontSize.blog-title')[0],
            lineHeight: theme('lineHeight.blog-tight'),
            fontWeight: '700',
            letterSpacing: theme('letterSpacing.blog-tight'),
            marginBottom: theme('spacing.8'),
            color: 'var(--aw-color-text-primary)',
          },
          // H2 - Major sections
          '& h2': {
            fontSize: theme('fontSize.blog-h2')[0],
            lineHeight: theme('lineHeight.blog-tight'),
            fontWeight: '700',
            letterSpacing: theme('letterSpacing.blog-normal'),
            marginTop: theme('spacing.section'),
            marginBottom: theme('spacing.5'),
            color: 'var(--aw-color-text-primary)',
          },
          // H3 - Subsections (Medium style: bold, prominent)
          '& h3': {
            fontSize: theme('fontSize.blog-h3')[0],
            lineHeight: theme('lineHeight.blog-normal'),
            fontWeight: '700',
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.4'),
            color: 'var(--aw-color-text-primary)',
          },
          // H4 - Minor headings
          '& h4': {
            fontSize: theme('fontSize.lg')[0],
            lineHeight: theme('lineHeight.blog-normal'),
            fontWeight: '600',
            marginTop: theme('spacing.8'),
            marginBottom: theme('spacing.3'),
            color: 'var(--aw-color-text-primary)',
          },
          // Body paragraphs - Medium's signature large, readable text
          '& p': {
            fontSize: theme('fontSize.blog-body')[0],
            lineHeight: theme('lineHeight.blog-normal'),
            marginBottom: theme('spacing.paragraph'),
            color: 'var(--aw-color-text-primary)',
            // Medium uses justified text on some views
            textAlign: 'left',
          },
          // Lists
          '& ul, & ol': {
            marginBottom: theme('spacing.paragraph'),
            paddingLeft: theme('spacing.6'),
          },
          '& li': {
            fontSize: theme('fontSize.blog-body')[0],
            lineHeight: theme('lineHeight.blog-normal'),
            marginBottom: theme('spacing.3'),
            // Medium uses bullet points with generous spacing
          },
          '& li > ul, & li > ol': {
            marginTop: theme('spacing.3'),
            marginBottom: '0',
          },
          // Blockquotes - Medium style with left border
          '& blockquote': {
            borderLeftWidth: '3px',
            borderLeftColor: 'var(--aw-color-accent)',
            paddingLeft: theme('spacing.6'),
            margin: `${theme('spacing.10')} 0`,
            fontStyle: 'italic',
            color: 'var(--aw-color-text-secondary)',
          },
          '& blockquote p': {
            fontSize: theme('fontSize.blog-body')[0],
            lineHeight: theme('lineHeight.blog-normal'),
            marginBottom: theme('spacing.4'),
          },
          // Code blocks - Medium style
          '& pre': {
            backgroundColor: theme('colors.code-bg'),
            borderRadius: theme('borderRadius.lg'),
            padding: theme('spacing.6'),
            margin: `${theme('spacing.8')} 0`,
            fontFamily: theme('fontFamily.mono'),
            fontSize: theme('fontSize.blog-code')[0],
            lineHeight: theme('lineHeight.blog-relaxed'),
            overflowX: 'auto',
            // Medium uses subtle shadows
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
          },
          // Inline code
          '& code': {
            fontFamily: theme('fontFamily.mono'),
            fontSize: '0.9em',
            backgroundColor: theme('colors.code-bg'),
            padding: '0.2em 0.4em',
            borderRadius: theme('borderRadius.md'),
            fontWeight: '500',
          },
          '& pre code': {
            backgroundColor: 'transparent',
            padding: '0',
            fontSize: 'inherit',
          },
          // Tables - Medium style
          '& table': {
            width: '100%',
            margin: `${theme('spacing.8')} 0`,
            borderCollapse: 'collapse',
            fontSize: theme('fontSize.blog-body')[0],
            lineHeight: theme('lineHeight.blog-normal'),
          },
          '& th': {
            backgroundColor: theme('colors.code-bg'),
            fontWeight: '600',
            textAlign: 'left',
            padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
            borderWidth: '1px',
            borderColor: theme('colors.border'),
            borderBottomWidth: '2px',
          },
          '& td': {
            padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
            borderWidth: '1px',
            borderColor: theme('colors.border'),
            lineHeight: theme('lineHeight.blog-normal'),
          },
          '& tr:nth-child(even)': {
            backgroundColor: theme('colors.code-bg'),
          },
          // Images - Medium style
          '& img': {
            borderRadius: theme('borderRadius.none'), // Medium uses square corners
            margin: `${theme('spacing.8')} 0`,
            maxWidth: '100%',
            height: 'auto',
            // Medium adds subtle shadows
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
          },
          '& figure': {
            margin: `${theme('spacing.8')} 0`,
          },
          // Image captions - Medium style
          '& figcaption': {
            fontSize: theme('fontSize.blog-caption')[0],
            lineHeight: theme('lineHeight.blog-normal'),
            color: 'var(--aw-color-text-light)',
            marginTop: theme('spacing.3'),
            textAlign: 'left',
          },
          // Links - Medium style
          '& a': {
            color: 'var(--aw-color-accent)',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            transition: 'color 0.15s ease',
            fontWeight: '500',
          },
          '& a:hover': {
            color: 'var(--aw-color-primary)',
            textDecorationColor: 'var(--aw-color-primary)',
          },
          // Horizontal rules
          '& hr': {
            margin: `${theme('spacing.12')} 0`,
            borderColor: theme('colors.border'),
            borderWidth: '1px 0 0 0',
          },
          // Strong/Bold text
          '& strong': {
            fontWeight: '700',
            color: 'var(--aw-color-text-primary)',
          },
          // Emphasis
          '& em': {
            fontStyle: 'italic',
          },
        },
        
        // Meta information styling (date, author, reading time)
        '.blog-meta': {
          fontSize: theme('fontSize.blog-small')[0],
          lineHeight: theme('lineHeight.blog-normal'),
          color: 'var(--aw-color-text-secondary)',
          fontWeight: '500',
        },
        
        // Author byline
        '.blog-author': {
          fontSize: theme('fontSize.blog-small')[0],
          color: 'var(--aw-color-text-secondary)',
        },
      });
    }),
  ],
  darkMode: 'class',
};
