import React, { useState, useEffect } from "react";
import CodeArea from "./components/CodeArea";
import Options from "./components/Options";
import OutputArea from "./components/OutputArea";
import { code } from "./components/defaultCode";
import "./CSS/App.css";

function App() {
  const [state, setState] = useState({
    code: code.cpp,
    result: "Submit code to see result",
    lang: "cpp"
  });

  return (
    <div class="wrapper">
      <div class="codeandoptions">
        <CodeArea defaultCode={state.code} />
        <Options state={state} />
      </div>
      <OutputArea result={state.result} />
    </div>
  );
}

export default App;
