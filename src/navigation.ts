import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

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

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms of Service', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/LocalAI-Agent' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-x', href: 'https://twitter.com/LocalAI-Agent' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: '#', class: 'opacity-50' },
    { ariaLabel: 'Reddit', icon: 'tabler:brand-reddit', href: '#', class: 'opacity-50' },
  ],
  footNote: `
    <div class="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
      <div class="text-sm">
        © ${new Date().getFullYear()} LocalAI Agent. All rights reserved.
      </div>
    </div>
  `,
};
