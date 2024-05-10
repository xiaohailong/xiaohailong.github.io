import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    assetPrefix: 'https://xiaohailong.github.io/lp/dist/'
  },
  html:{
    title: '给月月的卡片册',
    tags:[
      { tag: 'script', attrs: { src: 'swiper.js' } },
      { tag: 'link', attrs: { href: 'swiper.css', rel: 'stylesheet' } },
      // { tag: 'meta', attrs: { name: 'viewport', content: 'target-densitydpi=320,width=640,user-scalable=no' } }, //<meta name=”viewport” content=”target-densitydpi=320,width=640,user-scalable=no”>
    ]
  }
});
