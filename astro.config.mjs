import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import { h } from 'hastscript'
import { visit } from 'unist-util-visit'

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



// This plugin is an example to turn `::note` into divs, passing arbitrary
// attributes.
function myRemarkPlugin() {
  /**
   * @param {import('mdast').Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        if (node.name !== 'note') return

        const data = node.data || (node.data = {})
        const tagName = node.type === 'textDirective' ? 'span' : 'div'

        data.hName = tagName
        data.hProperties = h(tagName, node.attributes || {}).properties
      }
    })
  }
}