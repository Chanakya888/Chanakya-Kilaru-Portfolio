import React from "react";

export const WorkStrip = (props) => {
  const sendSuggestion = (value) => {
    props.sendSuggestion(value);
  };
  return (
    <div className="Suggestion-commands-container">
      <div>
        <h1
          className="Reducing-top-margin-for-h1 Suggestion-word"
          onClick={(e) => sendSuggestion("euff")}
        >
          EUFF
        </h1>
      </div>
      <div className="Suggestion-individual-command-container ">
        <h1
          className="Reducing-top-margin-for-h1 Suggestion-word"
          onClick={(e) => sendSuggestion("tsundoku")}
        >
          tsundoku
        </h1>
      </div>
      <div className="Suggestion-individual-command-container">
        <h1
          className="Reducing-top-margin-for-h1 Suggestion-word"
          onClick={(e) => sendSuggestion("donut")}
        >
          donut
        </h1>
      </div>
      <div className="Suggestion-individual-command-container">
        <h1
          className="Reducing-top-margin-for-h1 Suggestion-word"
          onClick={(e) => sendSuggestion("tedx")}
        >
          tedx
        </h1>
      </div>
    </div>
  );
};
