import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import "../CSS/CodeArea.css";

function CodeArea({ defaultCode }) {
  const onCodeChangeHandler = (newCode, e) => {
    console.log(e);
    return {
      code: newCode
    };
  };

  const inputChangeHandler = e => {
    return {
      input: e.target.value
    };
  };

  const options = {
    selectOnLineNumbers: true,
    renderIndentGuides: true,
    colorDecorators: true,
    cursorBlinking: "blink",
    autoClosingQuotes: "always",
    find: {
      autoFindInSelection: "always"
    },
    snippetSuggestions: "inline"
  };

  const editorDidMount = e => {
    console.log("Editor Mounted");
  };

  return (
    <>
      <div class="codearea">
        <p class="codeareap">Write your code here</p>
        <div class="codewritearea">
          <MonacoEditor
            width="100%"
            height="100%"
            //language={state.lang}
            theme="vs-dark"
            value={defaultCode}
            options={options}
            onChange={onCodeChangeHandler}
            editorDidMount={editorDidMount}
          />
        </div>
      </div>
    </>
  );
}

export default CodeArea;
