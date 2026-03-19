import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: [
    './src/pages/**/*.{astro,js,jsx,ts,tsx,md,mdx}',
    './src/components/**/*.{astro,js,jsx,ts,tsx}',
    './src/layouts/**/*.{astro,js,jsx,ts,tsx}',
  ],
  safelist: [
    // Layout classes used dynamically
    'min-h-screen',
    'antialiased',
    'bg-page',
    'bg-dark',
    'tracking-tight',
    'text-default',
    'dark',
    // Common utility classes
    'container',
    'mx-auto',
    'px-4',
    'py-4',
    'flex',
    'grid',
    'hidden',
    'block',
    'inline-block',
    'text-center',
    'text-left',
    'text-right',
    'items-center',
    'justify-center',
    'gap-2',
    'gap-4',
    'gap-6',
    'gap-8',
    'mb-2',
    'mb-4',
    'mb-6',
    'mb-8',
    'mt-2',
    'mt-4',
    'mt-6',
    'mt-8',
    'p-4',
    'p-6',
    'p-8',
    'rounded-lg',
    'rounded-xl',
    'shadow-lg',
    'transition',
    'hover:scale-105',
    'hover:shadow-xl',
    // Dark mode
    'dark:bg-dark',
    'dark:text-white',
    'dark:border-slate-700',
    // Responsive
    'md:flex',
    'md:grid',
    'md:px-6',
    'md:py-8',
    'lg:px-8',
    'lg:py-12',
    'xl:px-10',
    '2xl:text-[20px]',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        // Blog typography colors
        'text-body': 'var(--aw-color-text-body)',
        'text-heading': 'var(--aw-color-text-heading)',
        'text-secondary': 'var(--aw-color-text-secondary)',
        'text-light': 'var(--aw-color-text-light)',
        'code-bg': 'var(--aw-color-code-bg)',
        border: 'var(--aw-color-border)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--aw-font-mono)', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        // Blog typography sizes - User specifications
        'blog-body': ['16px', { lineHeight: '1.6', letterSpacing: '0.5px' }],
        'blog-h1': ['36px', { lineHeight: '1.2', letterSpacing: '0.75px' }],
        'blog-h2': ['28px', { lineHeight: '1.25', letterSpacing: '0.75px' }],
        'blog-h3': ['22px', { lineHeight: '1.3', letterSpacing: '0.75px' }],
        'blog-h4': ['20px', { lineHeight: '1.35', letterSpacing: '0.75px' }],
        'blog-h5': ['18px', { lineHeight: '1.4', letterSpacing: '0.75px' }],
        'blog-h6': ['16px', { lineHeight: '1.4', letterSpacing: '0.75px' }],
        'blog-code': ['15px', { lineHeight: '1.5', letterSpacing: '0px' }],
        'blog-small': ['14px', { lineHeight: '1.5' }],
      },
      fontWeight: {
        body: '400',
        h1: '700',
        h2: '600',
        h3: '600',
        h4: '500',
        h5: '500',
        h6: '500',
      },
      maxWidth: {
        'blog-content': '700px',
        'blog-prose': '4xl',
      },
      spacing: {
        paragraph: '16px',
        heading: '24px',
        section: '48px',
      },

      animation: {
        fade: 'fadeInUp 1s both',
        'gradient-slow': 'gradient 15s ease infinite',
        'gradient-medium': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 3s ease-in-out infinite',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant, addUtilities, theme }) => {
      addVariant('intersect', '&:not([no-intersect])');

      // Blog typography utilities
      addUtilities({
        '.prose-blog': {
          '&': {
            maxWidth: theme('maxWidth.blog-content'),
            margin: '0 auto',
            fontFamily: theme('fontFamily.sans'),
          },
          // H1 - Uppercase
          '& h1': {
            fontSize: theme('fontSize.blog-h1')[0],
            lineHeight: '1.2',
            fontWeight: '700',
            letterSpacing: '0.75px',
            marginBottom: theme('spacing.heading'),
            color: 'var(--aw-color-text-heading)',
            textTransform: 'uppercase',
          },
          // H2 - Uppercase
          '& h2': {
            fontSize: theme('fontSize.blog-h2')[0],
            lineHeight: '1.25',
            fontWeight: '600',
            letterSpacing: '0.75px',
            marginTop: theme('spacing.section'),
            marginBottom: theme('spacing.heading'),
            color: 'var(--aw-color-text-heading)',
            textTransform: 'uppercase',
          },
          // H3-H6 - Title Case
          '& h3': {
            fontSize: theme('fontSize.blog-h3')[0],
            lineHeight: '1.3',
            fontWeight: '600',
            letterSpacing: '0.75px',
            marginTop: theme('spacing.section'),
            marginBottom: theme('spacing.heading'),
            color: 'var(--aw-color-text-heading)',
          },
          '& h4': {
            fontSize: theme('fontSize.blog-h4')[0],
            lineHeight: '1.35',
            fontWeight: '500',
            marginTop: theme('spacing.6'),
            marginBottom: theme('spacing.4'),
            color: 'var(--aw-color-text-heading)',
          },
          '& h5': {
            fontSize: theme('fontSize.blog-h5')[0],
            lineHeight: '1.4',
            fontWeight: '500',
            marginTop: theme('spacing.5'),
            marginBottom: theme('spacing.3'),
            color: 'var(--aw-color-text-heading)',
          },
          '& h6': {
            fontSize: theme('fontSize.blog-h6')[0],
            lineHeight: '1.4',
            fontWeight: '500',
            marginTop: theme('spacing.5'),
            marginBottom: theme('spacing.3'),
            color: 'var(--aw-color-text-heading)',
          },
          // Body paragraphs
          '& p': {
            fontSize: theme('fontSize.blog-body')[0],
            lineHeight: '1.6',
            letterSpacing: '0.5px',
            marginBottom: theme('spacing.paragraph'),
            color: 'var(--aw-color-text-body)',
          },
          // Lists
          '& ul, & ol': {
            marginBottom: theme('spacing.paragraph'),
            paddingLeft: theme('spacing.6'),
          },
          '& li': {
            fontSize: theme('fontSize.blog-body')[0],
            lineHeight: '1.6',
            marginBottom: theme('spacing.2'),
          },
          // Blockquotes
          '& blockquote': {
            borderLeftWidth: '4px',
            borderLeftColor: 'var(--aw-color-border)',
            paddingLeft: '16px',
            margin: '16px 0',
            fontStyle: 'italic',
            color: 'var(--aw-color-blockquote)',
          },
          '& blockquote p': {
            fontSize: theme('fontSize.blog-body')[0],
            lineHeight: '1.6',
            marginBottom: '0',
          },
          // Code blocks
          '& pre': {
            backgroundColor: theme('colors.code-bg'),
            borderRadius: '8px',
            padding: '12px 16px',
            margin: `${theme('spacing.6')} 0`,
            fontFamily: theme('fontFamily.mono'),
            fontSize: theme('fontSize.blog-code')[0],
            lineHeight: '1.5',
            overflow: 'auto',
          },
          // Inline code
          '& code': {
            fontFamily: theme('fontFamily.mono'),
            fontSize: theme('fontSize.blog-code')[0],
            backgroundColor: theme('colors.code-bg'),
            padding: '2px 6px',
            borderRadius: '4px',
          },
          '& pre code': {
            backgroundColor: 'transparent',
            padding: '0',
            fontSize: 'inherit',
          },
          // Tables
          '& table': {
            width: '100%',
            margin: `${theme('spacing.6')} 0`,
            borderCollapse: 'collapse',
            fontSize: theme('fontSize.blog-body')[0],
          },
          '& th': {
            backgroundColor: theme('colors.code-bg'),
            fontWeight: '600',
            textAlign: 'left',
            padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
            borderWidth: '1px',
            borderColor: theme('colors.border'),
          },
          '& td': {
            padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
            borderWidth: '1px',
            borderColor: theme('colors.border'),
          },
          // Images
          '& img': {
            borderRadius: theme('borderRadius.lg'),
            margin: `${theme('spacing.8')} 0`,
            maxWidth: '100%',
            height: 'auto',
          },
          // Links
          '& a': {
            color: 'var(--aw-color-text-link)',
            textDecoration: 'underline',
            textUnderlineOffset: '2px',
            transition: 'color 0.2s',
          },
          '& a:hover': {
            color: 'var(--aw-color-accent)',
          },
        },

        // Meta information
        '.blog-meta': {
          fontSize: theme('fontSize.blog-small')[0],
          color: 'var(--aw-color-text-secondary)',
        },
      });
    }),
  ],
  darkMode: 'class',
};
