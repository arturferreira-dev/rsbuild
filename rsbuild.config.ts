import { pluginModuleFederation } from '@module-federation/rsbuild-plugin'
import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import config from './module-federation.config.js'
export default defineConfig({
  server: {
    port: 2000,
  },
  html: {
    template: './index.html',
  },
  source: {
    entry: {
      main: './src/main.tsx',
    },
  },
  plugins: [pluginReact(), pluginModuleFederation(config)],
})
