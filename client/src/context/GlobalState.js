import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { code } from "../components/defaultCode";

// Initial State
const initialState = {
  code: code.python,
  result: "Submit code to see result",
  lang: "python",
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function handleCodeChange(code) {
    dispatch({
      type: "CODE_CHANGE",
      payload: code,
    });
  }

  function handleLangChange(input) {
    dispatch({
      type: "LANG_CHANGE",
      payload: input,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        code: state.code,
        lang: state.lang,
        result: state.result,
        handleCodeChange,
        handleLangChange,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
