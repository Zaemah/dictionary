import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        {props.synonyms.map(function (similarWords, index) {
          return (
            <span key={index} className="synonyms">
              {similarWords}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}