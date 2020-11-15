import React, { useContext } from "react";
import "../CSS/Options.css";
import { GlobalContext } from "../context/GlobalState";
import secret from "../secret";
import Dropdown from "react-dropdown";
import axios from "axios";

function Options({ displayOutput }) {
  const { code } = useContext(GlobalContext);
  const { lang } = useContext(GlobalContext);
  const { result } = useContext(GlobalContext);
  const { handleLangChange } = useContext(GlobalContext);

  const state = {
    code: code,
    result: result,
    lang: lang,
  };

  console.log(state);

  const options = ["python", "java", "cpp", "c"];
  const defaultOption = options[0];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert("Submit Code");
    axios
      .post(`${secret.url}code/submit`, state)
      .then((res) => {
        console.log("this is it" + JSON.stringify(res.data));
        const data = res.data;
        if (data.err) {
          // Error in user code
          console.log("options" + state);
          displayOutput(data.error);
        } else {
          displayOutput(data.output);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div class="options">
        <div class="optionsbox1">
          <div class="btncont">
            <button class="optionsbtn" onClick={onSubmitHandler}>
              Run
              <span class="btnicon">
                <img src="" />
              </span>
            </button>
            <button class="optionsbtn">
              Stop
              <span class="btnicon">
                <img src="" />
              </span>
            </button>
            <button class="optionsbtn">
              Download
              <span class="btnicon">
                <img src="" />
              </span>
            </button>
            <Dropdown
              options={options}
              onChange={(option) => handleLangChange(option.value)}
              value={defaultOption}
              placeholder="Select an option"
            />
          </div>
        </div>
        <div class="optionsbox2">
          <p class="optionsp">Input area</p>
          <div class="optionswritearea"></div>
        </div>
      </div>
    </>
  );
}

export default Options;
