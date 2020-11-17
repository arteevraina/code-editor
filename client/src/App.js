import React, { useState, useContext } from "react";
import CodeArea from "./components/CodeArea";
import Options from "./components/Options";
import OutputArea from "./components/OutputArea";
import { GlobalProvider } from "./context/GlobalState";
import "./CSS/App.css";

const App = () => {
  return (
    <GlobalProvider>
      <div class="wrapper">
        <div class="codeandoptions">
          <CodeArea />
          <Options />
        </div>
        <OutputArea />
      </div>
    </GlobalProvider>
  );
};

export default App;
