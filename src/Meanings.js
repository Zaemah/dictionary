import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="section">
      <h5>{props.data.partOfSpeech}</h5>
      <p>
        {props.data.definition}
        <br />
        <span className="example">
          <i>{props.data.example}</i>
        </span>
      </p>
      <Synonyms synonyms={props.data.synonyms} />
    </div>
  );
}