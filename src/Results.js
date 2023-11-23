import React from "react";
import Meanings from "./Meanings.js";
import Photos from "./Photos.js";

export default function Results(props) {
  if (props.result) {
    if (props.result.word) {
      return (
        <div className="results">
          <div className="section">
            <h3>{props.result.word}</h3>
            <h4>/{props.result.phonetic}/</h4>
          </div>
          <div>
            {props.result.meanings.map(function (definitions, index) {
              if (index >= 0) {
                return (
                  <div key={index}>
                    <Meanings data={definitions} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <Photos word={props.word} />
        </div>
      );
    } else {
      return (
        <div className="section">
          <p>
            We could not find any description for that word.
            <br />
            It might be misspelled or it might not exist.
            <br />
            Please, try again.
          </p>
        </div>
      );
    }
  } else {
    return null;
  }
}