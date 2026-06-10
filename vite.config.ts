import { defineConfig } from 'vite'
import vike from 'vike/plugin'
import react from '@vitejs/plugin-react'
import path from 'path'

const mrfDevtoolsSrc = path.resolve(__dirname, 'modules', 'mobx-react-form-devtools', 'src')

export default defineConfig({
  base: process.env.REACT_DEV === '1' ? '/' : '/mobx-react-form-demo/',
  plugins: [
    react(),
    vike({
      prerender: true,
    }),
  ],
  resolve: {
    alias: [
      { find: 'mobx-react-form-devtools', replacement: mrfDevtoolsSrc },
      { find: /^validatorjs$/, replacement: 'validatorjs/dist/validator.js' },
    ],
  },
  optimizeDeps: {
    include: [
      'classnames',
      'react-dock',
      'react-json-tree',
    ],
  },
  define: {
    MRF_SOURCE: JSON.stringify(path.resolve(__dirname, 'node_modules', 'mobx-react-form', 'lib')),
    'process.env.NODE_ENV': JSON.stringify(process.env.REACT_DEV === '1' ? 'development' : 'production'),
  },
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    outDir: 'build',
  },
  ssr: {
    noExternal: [
      /^@mui\//,
      /^@emotion\//,
      /^@dnd-kit\//,
      /^@headlessui\//,
      /^antd/,
      /^@ant-design/,
      /^rc-/,
      /^react-aria/,
      /^react-select/,
      /^dom-helpers/,
      /^react-transition-group/,
      // Bundle these into the SSR build so they share the same React instance
      // as the rest of the app during Vike prerender. Leaving them external
      // caused a second copy of React to be resolved from node_modules,
      // triggering "Minified React error #321" on prerender.
      'mobx-react-form',
      'mobx-react-form-devtools',
    ],
    external: ['prop-types'],
  },
})
