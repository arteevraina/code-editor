import React from "react";

import "../CSS/OutputArea.css";

function OutputArea({ result }) {
  return (
    <div className="outputarea">
      <h1 className="outputtext">Output Area</h1>
      {console.log("outputara " + result)}
      <textarea className="textarea" value={result}></textarea>
    </div>
  );
}

export default OutputArea;
