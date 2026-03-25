import { getPermalink, getBlogPermalink } from './utils/permalinks';

interface Link {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
}

interface Links {
  title?: string;
  links: Array<Link>;
}

interface FooterData {
  links: Array<Links>;
  secondaryLinks: Array<Link>;
  socialLinks: Array<Link>;
  footNote: string;
}

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData: FooterData = {
  links: [
    {
      links: [
        {
          text: 'Home',
          href: getPermalink('/'),
        },
        {
          text: 'About',
          href: getPermalink('/about'),
        },
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms of Service', href: getPermalink('/terms') },
    { text: 'Cookie Policy', href: getPermalink('/cookies') },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/LocalAI-Agent' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-x', href: 'https://twitter.com/localai67177' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/localai-agent' },
  ],
  footNote: `
    <div class="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
      <div class="text-sm">
        © ${new Date().getFullYear()} LocalAI Agent. All rights reserved.
      </div>
      <div class="text-sm text-muted">
        Enterprise Local AI Infrastructure & AI Agents
      </div>
    </div>
  `,
};
