import React, { useState } from "react";
import Results from "./Results.js";
import Form from "./Form.js";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div className="Dictionary">
      <h1 className="mb-4">
        <img src="./public/dictionaryIcon.jpg" alt="dictionary icon" className="icon-fuid"/>
      </h1>
      <div className="section">
        <h2 className="mb-3">What word would you like to look up?</h2>
        <Form word={word} setWord={setWord} setResult={setResult} />
        <div className="mt-2">
          <small>E.g. developer, project, sunrise, flower</small>
        </div>
      </div>
      <Results result={result} word={word} />
    </div>
  );
}