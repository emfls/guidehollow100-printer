import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://printer.guidehollow.com',output:'static',trailingSlash:'always',integrations:[sitemap({filter: (url) => !['/guides/','/privacy/','/disclosure/'].includes(new URL(url).pathname)})]});
