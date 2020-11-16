import React, { useState } from "react";
import CodeArea from "./components/CodeArea";
import Options from "./components/Options";
import OutputArea from "./components/OutputArea";
import { code } from "./components/defaultCode";
import { GlobalProvider } from "./context/GlobalState";
import "./CSS/App.css";

const App = () => {
  const [state, setState] = useState({
    code: code.python,
    result: "Submit code to see result",
    lang: "python",
  });

  const desplayOutput = async (output) => {
    setState((prevState) => {
      return {
        ...prevState,
        result: output,
      };
    });

    // console.log(state.result);
  };

  return (
    <GlobalProvider>
      <div class="wrapper">
        <div class="codeandoptions">
          <CodeArea />
          <Options state={state} displayOutput={desplayOutput} />
        </div>
        <OutputArea result={state.result} />
      </div>
    </GlobalProvider>
  );
};

export default App;
