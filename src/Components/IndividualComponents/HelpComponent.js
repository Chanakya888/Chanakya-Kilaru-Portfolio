import React from "react";

export const HelpComponent = (props) => {
  return (
    <div className="Return-command-container">
      <p>
        <q>{props.value}</q> is not a valid command. You can communicate with
        the Star Trek database by simply typing any of the below commands, then
        clicking enter or by tapping on the suggested commands.
      </p>
    </div>
  );
};
