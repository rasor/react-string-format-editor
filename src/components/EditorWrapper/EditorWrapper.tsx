//import './EditorWrapper.css';

import * as React from "react";

// import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//import css from './react-draft-wysiwyg.module.css';
import css2 from './EditorWrapper.module.css';

// dist/index.js, dist/index.es.js...
// [!] Error: 'Editor' is not exported by node_modules\react-draft-wysiwyg\dist\react-draft-wysiwyg.js
// Problem:
// https://github.com/rollup/rollup-plugin-commonjs#custom-named-exports
// Fix:
// https://github.com/rollup/rollup/wiki/Troubleshooting#name-is-not-exported-by-module
// Fixed in rollup.config.js

const EditorWrapper: React.FC = () => {
  return (
    <Editor
//      wrapperClassName="rich-editor demo-wrapper"
      wrapperClassName={css2["rich-editor"] + ' ' + css2["demo-wrapper"]}
//      editorClassName="demo-editor"
/>
  );
};

{/* <Editor
wrapperClassName={css.richEditor + ' ' + css.demoWrapper}
editorClassName={css.demoEditor}/> */}

export default EditorWrapper;
