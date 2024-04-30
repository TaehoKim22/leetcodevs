// CodeEditor.js
import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  return (
    <Editor
      height="500px"
      defaultLanguage="javascript"
      defaultValue="// Type your JavaScript code here"
      theme="vs-dark"
      options={{
        lineNumbers: "on",
        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: false,
        cursorStyle: "line",
        automaticLayout: true,
        fontSize: 12,
      }}
    />
  );
};

export default CodeEditor;
