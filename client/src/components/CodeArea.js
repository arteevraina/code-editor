import React, { useState } from "react";
import axios from "axios";
import MonacoEditor from "react-monaco-editor";
import { code } from "./defaultCode";
import secret from "../secret";
import "../CSS/CodeArea.css";

function CodeArea() {
  const [state, setState] = useState({
    code: code.cpp,
    result: "Submit code to see result",
    lang: "cpp",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert("Submit Code");
    axios
      .post(`${secret.url}code/submit`, state)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        if (data.err) {
          // Error in user code
          setState((prevState) => {
            return {
              ...prevState,
              result: data.err,
            };
          });
        } else {
          setState((prevState) => {
            return {
              ...prevState,
              result: data.output,
            };
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onCodeChangeHandler = (newCode, e) => {
    console.log(e);
    setState((prevState) => {
      return {
        ...prevState,
        code: newCode,
      };
    });
  };

  const inputChangeHandler = (e) => {
    setState((prevState) => {
      return {
        input: e.target.value,
      };
    });
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

  console.log(state);

  return (
    <>
      <div class="codearea">
        <p class="codeareap">Write your code here</p>
        <div class="codewritearea">
          <MonacoEditor
            width="800"
            height="700"
            language={state.lang}
            theme="vs-dark"
            value={state.code}
            options={options}
            onChange={onCodeChangeHandler}
            editorDidMount={editorDidMount}
          />
        </div>
        <button className="btn btn-success" onClick={onSubmitHandler}>
          Submit Code
        </button>
        <div className="col-12 my-5">
          <textarea
            type="text"
            id="result"
            value={state.result}
            disabled={true}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default CodeArea;
