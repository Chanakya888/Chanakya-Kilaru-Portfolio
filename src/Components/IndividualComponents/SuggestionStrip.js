import React from "react";
import { WorkStrip } from "./SuggestionStrip/WorkStrip";
import { RegularStrip } from "./SuggestionStrip/RegularStrip";

export const SuggestionStrip = (props) => {
  const suggestionStripWord = props.suggestionStripWord;

  const sendSuggestion = (value) => {
    props.addFromSuggestionStrip(value);
  };
  if (suggestionStripWord === "work") {
    return <WorkStrip sendSuggestion={sendSuggestion} />;
  } else if (suggestionStripWord === "euff") {
    return <WorkStrip sendSuggestion={sendSuggestion} />;
  } else if (suggestionStripWord === "tsundoku") {
    return <WorkStrip sendSuggestion={sendSuggestion} />;
  } else if (suggestionStripWord === "donut") {
    return <WorkStrip sendSuggestion={sendSuggestion} />;
  } else if (suggestionStripWord === "tedx") {
    return <WorkStrip sendSuggestion={sendSuggestion} />;
  } else if (suggestionStripWord === "about") {
    return <RegularStrip sendSuggestion={sendSuggestion} />;
  } else {
    return <RegularStrip sendSuggestion={sendSuggestion} />;
  }
};
