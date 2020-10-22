import React from "react";
import CodeArea from "./components/CodeArea";
import Options from "./components/Options";
import OutputArea from "./components/OutputArea";

function App() {
  return (
    <div>
      <div>
        <CodeArea />
        <Options />
      </div>
      <OutputArea />
    </div>
  );
}

export default App;
