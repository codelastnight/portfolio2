import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import { h } from 'hastscript'
import { visit } from 'unist-util-visit'
import { selectAll } from 'unist-util-select';

// https://astro.build/config
export default defineConfig({
  site: 'https://simonzhang.design',
  // image: {
  //   service: passthroughImageService(),
  // },
  integrations: [mdx(), tailwind()],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [myRemarkPlugin],
  },
});



// This plugin is an example to adds custom classes to images
// attributes.
function myRemarkPlugin() {
  /**
   * @param {import('mdast').Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return (tree) => {
    const paragraph = selectAll('paragraph, heading', tree);

    paragraph.forEach(node => {
      if (!node.data) node.data = {};
      if (node.children.some(e => e.type === 'image')) {
        node.data.hProperties = {
          className: 'paragraph-image'
        }
      } else {
        node.data.hProperties = {
          className: 'paragraph-text'
        }
      }

    })

  }
}