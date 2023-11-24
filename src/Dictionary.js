import React, { useState } from "react";
import Results from "./Results.js";
import Form from "./Form.js";
import Image from "./dictionary-icon.jpg";
export default function Dictionary() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div className="Dictionary">
       <img src={Image} alt="dictionary icon" className="icon img-fuid"/>
     <h1 className="mb-4">Dictionery </h1>
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
