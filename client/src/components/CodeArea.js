import React, { useContext } from "react";
import MonacoEditor from "react-monaco-editor";
import { GlobalContext } from "../context/GlobalState";
import "../CSS/CodeArea.css";

function CodeArea({ onCodeChangeHandler }) {
  const { code } = useContext(GlobalContext);
  console.log(code);
  const { lang } = useContext(GlobalContext);
  // console.log(lang);
  const { handleCodeChange } = useContext(GlobalContext);

  const inputChangeHandler = (e) => {
    return {
      input: e.target.value,
    };
  };

  const options = {
    selectOnLineNumbers: true,
    renderIndentGuides: true,
    colorDecorators: true,
    cursorBlinking: "blink",
    autoClosingQuotes: "always",
    find: {
      autoFindInSelection: "always",
    },
    snippetSuggestions: "inline",
  };

  const editorDidMount = (e) => {
    console.log("Editor Mounted");
  };

  return (
    <>
      <div class="codearea">
        <div class="codewritearea">
          <MonacoEditor
            width="100%"
            height="100%"
            theme="hc-black"
            value={code}
            options={options}
            onChange={(newCode) => handleCodeChange(newCode)}
            editorDidMount={editorDidMount}
          />
        </div>
      </div>
    </>
  );
}

export default CodeArea;
