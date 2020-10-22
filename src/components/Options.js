import React from "react";
import "../CSS/Options.css";

function Options() {
  return (
    <>
      <div class="options">
        <div class="optionsbox1">
          <div class="btncont">
            <button class="optionsbtn">
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
