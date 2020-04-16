import React from "react";
import CommandEntry from "./Components/CommandEntry";
import { HomeComponent } from "./Components/HomeComponent";
// import { LoadingComponent } from "./Components/LoadingComponent";
import { useSpring, animated } from "react-spring";

function App() {
  const opacity = useSpring({});
  return (
    <div className="App">
      <animated.div style={opacity}>
        <HomeComponent />
        <CommandEntry />
      </animated.div>
    </div>
  );
}

export default App;
