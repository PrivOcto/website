import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';
import type { RehypePlugin, RemarkPlugin } from '@astrojs/markdown-remark';

export const readingTimeRemarkPlugin: RemarkPlugin = () => {
  return function (tree, file) {
    const textOnPage = toString(tree);
    const readingTime = Math.ceil(getReadingTime(textOnPage).minutes);

    if (typeof file?.data?.astro?.frontmatter !== 'undefined') {
      file.data.astro.frontmatter.readingTime = readingTime;
    }
  };
};

export const responsiveTablesRehypePlugin: RehypePlugin = () => {
  return function (tree) {
    if (!tree.children) return;

    for (let i = 0; i < tree.children.length; i++) {
      const child = tree.children[i];

      if (child.type === 'element' && child.tagName === 'table') {
        tree.children[i] = {
          type: 'element',
          tagName: 'div',
          properties: {
            style: 'overflow:auto',
          },
          children: [child],
        };

        i++;
      }
    }
  };
};

export const lazyImagesRehypePlugin: RehypePlugin = () => {
  return function (tree) {
    if (!tree.children) return;

    visit(tree, 'element', function (node) {
      if (node.tagName === 'img') {
        node.properties.loading = 'lazy';
        
        // Add decoding attribute for better performance
        if (!node.properties.decoding) {
          node.properties.decoding = 'async';
        }
        
        // Add class for CLS prevention
        const existingClass = node.properties.class || '';
        node.properties.class = `${existingClass} cls-protected`.trim();
      }
    });
  };
};

/**
 * Rehype plugin to wrap images in aspect ratio containers
 * This prevents Cumulative Layout Shift (CLS) by reserving space before images load
 */
export const imageAspectRatioRehypePlugin: RehypePlugin = () => {
  return function (tree) {
    if (!tree.children) return;

    visit(tree, 'element', function (node, index, parent) {
      if (node.tagName === 'img' && parent) {
        const width = node.properties?.width;
        const height = node.properties?.height;
        
        // Calculate aspect ratio if dimensions are available
        let aspectRatioStyle = '';
        if (width && height) {
          const ratio = (height / width) * 100;
          aspectRatioStyle = `padding-bottom: ${ratio}%;`;
        } else {
          // Default to 16:9 if no dimensions
          aspectRatioStyle = 'padding-bottom: 56.25%;';
        }

        // Create wrapper div with aspect ratio
        const wrapper = {
          type: 'element' as const,
          tagName: 'div',
          properties: {
            class: 'image-aspect-ratio-wrapper',
            style: `position: relative; ${aspectRatioStyle} margin: 1.5em 0;`,
          },
          children: [
            {
              type: 'element' as const,
              tagName: 'img',
              properties: {
                ...node.properties,
                style: 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain;',
              },
              children: [],
            },
          ],
        };

        // Replace the img with the wrapper
        if (typeof index === 'number') {
          parent.children[index] = wrapper;
        }
      }
    });
  };
};
