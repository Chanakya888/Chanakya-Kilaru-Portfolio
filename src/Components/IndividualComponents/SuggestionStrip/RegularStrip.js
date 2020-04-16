import React from "react";

export const RegularStrip = (props) => {
  const sendSuggestion = (value) => {
    props.sendSuggestion(value);
  };
  return (
    <div className="Suggestion-commands-container">
      <div>
        <h1
          className="Reducing-top-margin-for-h1 Suggestion-word"
          onClick={(e) => sendSuggestion("work")} 
        >
          work
        </h1>
      </div>
      <div className="Suggestion-individual-command-container">
        <h1
          className="Reducing-top-margin-for-h1 Suggestion-word"
          onClick={(e) => sendSuggestion("about")}
        >
          about
        </h1>
      </div>
      <div className="Suggestion-individual-command-container">
        <h1
          className="Reducing-top-margin-for-h1 Suggestion-word"
          onClick={(e) => sendSuggestion("contact")}
        >
          contact
        </h1>
      </div>
    </div>
  );
};
