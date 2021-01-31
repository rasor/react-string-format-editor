import React, { Component } from 'react'

import { ExampleComponent, EditorWrapper } from 'react-string-format-editor'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <div>
          <EditorWrapper />
        </div>
        <div>
          <ExampleComponent text='Modern React component module' />
        </div>
      </div>
    )
  }
}
