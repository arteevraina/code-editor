import React from "react";

import "../CSS/OutputArea.css";

function OutputArea({ result }) {
  return (
    <div className="outputarea">
      <h1 className="outputtext">Output Area</h1>
      <textarea className="textarea">{result}</textarea>
    </div>
  );
}

export default OutputArea;
