import { code } from "../components/defaultCode";

export default (state, action) => {
  switch (action.type) {
    case "DISPLAY_OUTPUT":
      return {
        ...state,
        result: action.payload,
      };

    case "CODE_CHANGE":
      return {
        ...state,
        code: action.payload,
      };

    case "PREVIOUS_INPUT":
      return {
        ...state,
        input: action.payload
      };

    case "INPUT_CHANGE":
      return {
        ...state,
        input: action.payload,
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
      } else if (action.payload === "javascript") {
        return {
          ...state,
          lang: action.payload,
          code: code.javascript,
        };
      }

    default:
      return state;
  }
};
