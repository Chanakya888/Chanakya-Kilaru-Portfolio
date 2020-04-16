import React from "react";
import { RegularStrip } from "./SuggestionStrip/RegularStrip";

export const InitialComponent = (props) => {
  const sendSuggestion = (value) => {
    props.addFromSuggestionStrip(value);
  };
  return (
    <div>
      <div className="Command-container Initial-container">
        <div className="Initial-command-container">
          <h1 className="Terminal-command">$bash 22.1.5:~ </h1>
        </div>
        <div className="Input-field-container Input-text">
          <h1 className=" Terminal-command">start</h1>
        </div>
      </div>
      <div className="Return-command-container">
        <p>
          Hello there, you can communicate with the StarTrek database by simply
          typing any of the below commands, then clicking enter or by tapping on
          the suggested commands.
        </p>
        <RegularStrip sendSuggestion={sendSuggestion} />
      </div>
    </div>
  );
};
