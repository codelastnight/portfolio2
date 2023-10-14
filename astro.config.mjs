import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://simonzhang.design',
  image: {
    service: passthroughImageService(),
  },
  integrations: [mdx(), tailwind()]
});