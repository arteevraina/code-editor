import { code } from "../components/defaultCode";

export default (state, action) => {
  switch (action.type) {
    case "CODE_CHANGE":
      return {
        ...state,
        code: action.payload,
      };
    case "LANG_CHANGE":
      if (action.payload === "cpp") {
        return {
          ...state,
          lang: action.payload,
          code: code.cpp,
        };
      } else if (action.payload === "c") {
        return {
          ...state,
          lang: action.payload,
          code: code.c,
        };
      } else if (action.payload === "java") {
        return {
          ...state,
          lang: action.payload,
          code: code.java,
        };
      } else if (action.payload === "python") {
        return {
          ...state,
          lang: action.payload,
          code: code.python,
        };
      }

    default:
      return state;
  }
};
