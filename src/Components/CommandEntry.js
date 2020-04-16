import React, { useState } from "react";
import Validate from "./Validate";
import CheckCommand from "./CheckCommand";
import { SuggestionStrip } from "./IndividualComponents/SuggestionStrip";
import { InitialComponent } from "./IndividualComponents/InitialComponent";

function CommandEntry() {
  const [command, setCommand] = useState("");
  const [results, setResults] = useState([]);
  const [keys, setKeys] = useState([1]);
  const handleSubmit = (e) => {
    if (CheckCommand(command)) {
      setResults((prev) => [...prev, command]);
      setKeys((key) => [...key, key + 1]);
      setCommand("");
    }
  };

  const addFromSuggestionStrip = (Suggestionword) => {
    if (Suggestionword?.trim() !== "") {
      setResults((prev) => [...prev, Suggestionword]);
    }
  };
  return (
    <div className="Agent-summary">
      <hr className="Upper-line" />
      <div className="Lines">
        <div className="Lower-line-box">
          <hr className="Lower-line" />
        </div>
        <div className="Command-center-box">
          <h1 className="Command-center">Command Center</h1>
        </div>
        <div className="Lower-line-right-box">
          <hr className="Lower-line" />
        </div>
      </div>
      <div>
        <InitialComponent addFromSuggestionStrip={addFromSuggestionStrip} />
        {results.map((e) => (
          <div>
            <div className="Command-container Margin-after-each-command">
              <div className="Initial-command-container">
                <h1 className="Removing-h1-for-Bash">$bash 22.1.5:~ </h1>
              </div>
              <div className="Input-field-container Input-text ">{e}</div>
            </div>
            <Validate value={e} results={results} key={keys} />
            {
              <SuggestionStrip
                suggestionStripWord={e}
                addFromSuggestionStrip={addFromSuggestionStrip}
              />
            }
          </div>
        ))}
        <div className="Command-container Margin-after-each-command">
          <div className="Initial-command-container">
            <h1 className="Removing-h1-for-Bash">$bash 22.1.5:~ </h1>
          </div>
          <div className="Input-field-container ">
            <input
              className="Input-text"
              type="text"
              placeholder="Type command here"
              value={command}
              onChange={(e) => {
                setCommand(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.keyCode === 13) {
                  handleSubmit();
                }
              }}
            />{" "}
            <button onClick={handleSubmit} className="Submit-button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommandEntry;
