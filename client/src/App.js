import React from "react";
import CodeArea from "./components/CodeArea";
import Options from "./components/Options";
import OutputArea from "./components/OutputArea";
import "./CSS/App.css";

function App() {
  return (
    <div class="wrapper">
      <div class="codeandoptions">
        <CodeArea />
        <Options />
      </div>
      <OutputArea />
    </div>
  );
}

export default App;
