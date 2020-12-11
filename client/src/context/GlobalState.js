import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { code } from "../components/defaultCode";

// Initial State
const initialState = {
  code: code.python,
  result: "Run and Submit code to see result",
  lang: "python",
  input: "Enter your input"
};

var toStore;

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function handleCodeChange(code) {
    dispatch({
      type: "CODE_CHANGE",
      payload: code
    });
  }

  function handleLangChange(input) {
    dispatch({
      type: "LANG_CHANGE",
      payload: input
    });
  }

  function handleInputChange(input_data) {
    toStore = input_data;
    dispatch({
      type: "INPUT_CHANGE",
      payload: input_data
    });
  }

  function storePreviousInput() {
    console.log(toStore, "this is stored");
    localStorage.setItem("lastInput", toStore ? toStore : "");
  }

  function loadPreviousInput() {
    var lastInput =
      localStorage.getItem("lastInput") != ""
        ? localStorage.getItem("lastInput")
        : "";

    dispatch({
      type: "PREVIOUS_INPUT",
      payload: lastInput
    });
  }

  function displayOutput(output) {
    dispatch({
      type: "DISPLAY_OUTPUT",
      payload: output
    });
  }

  function download() {
    var element = document.createElement("a");
    console.log(state.code);
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(state.code)
    );
    element.setAttribute("download", "code.txt");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  return (
    <GlobalContext.Provider
      value={{
        code: state.code,
        lang: state.lang,
        result: state.result,
        input: state.input,
        handleCodeChange,
        handleLangChange,
        handleInputChange,
        displayOutput,
        download,
        storePreviousInput,
        loadPreviousInput
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
