import React, { Component } from 'react'

import { ExampleComponent, EditorWrapper } from 'react-string-format-editor'

export default class App extends Component {
  render () {
    return (
      <div>
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
