import { createModuleFederationConfig } from '@module-federation/enhanced/rspack'

export default createModuleFederationConfig({
  name: 'host',
  //   remotes: {
  //     provider: 'provider@http://localhost:2004/mf-manifest.json',
  //   },
  exposes: {
    './App': './src/App.tsx',
    './utils': './src/utils.ts',
  },

  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
})
