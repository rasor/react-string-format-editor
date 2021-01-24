//import './EditorWrapper.css';

import * as React from "react";

// import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

// dist/index.js, dist/index.es.js...
// [!] Error: 'Editor' is not exported by node_modules\react-draft-wysiwyg\dist\react-draft-wysiwyg.js
// Problem:
// https://github.com/rollup/rollup-plugin-commonjs#custom-named-exports
// Fix:
// https://github.com/rollup/rollup/wiki/Troubleshooting#name-is-not-exported-by-module
// Fixed in rollup.config.js

const EditorWrapper: React.FC = () => {
  return (
    <Editor/>
  );
};

export default EditorWrapper;
