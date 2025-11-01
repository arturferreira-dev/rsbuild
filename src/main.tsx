import('./bootstrap.js')
import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import App from './App.js'
export const { bootstrap, mount, unmount, update } = singleSpaReact({
  React,
  ReactDOM: ReactDOM as any,
  rootComponent: App,
  errorBoundary(_err, _info, _props) {
    return <div>This renders when a catastrophic error occurs</div>
  },
})
