import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMClient from 'react-dom/client'
import singleSpaReact from 'single-spa-react'

export default function App() {
  return <h1>Hello, RSBuild!</h1>
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  ReactDOMClient,
  rootComponent: App,
  errorBoundary(err, _info, _props) {
    return <div>Erro: {err.message}</div>
  },
})

export const { bootstrap, mount, unmount } = lifecycles
