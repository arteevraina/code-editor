import React, { useState, useEffect } from "react";
import CodeArea from "./components/CodeArea";
import Options from "./components/Options";
import OutputArea from "./components/OutputArea";
import { code } from "./components/defaultCode";
import "./CSS/App.css";

class App extends React.Component {
  state = {
    code: code.cpp,
    result: "Submit code to see result",
    lang: "cpp"
  };

  onCodeChangeHandler = async (newCode, e) => {
    this.setState({
      code: newCode
    });
    console.log(newCode);

    console.log(this.state);
  };

  desplayOutput = async output => {
    this.setState({
      result: output
    });
    console.log(this.state.result);
  };

  render() {
    return (
      <div class="wrapper">
        <div class="codeandoptions">
          <CodeArea
            defaultCode={this.state.code}
            onCodeChangeHandler={this.onCodeChangeHandler}
          />
          <Options state={this.state} displayOutput={this.desplayOutput} />
        </div>
        <OutputArea result={this.state.result} />
      </div>
    );
  }
}

export default App;
