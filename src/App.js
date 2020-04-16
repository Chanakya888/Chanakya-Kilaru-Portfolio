import React from "react";
import CommandEntry from "./Components/CommandEntry";
import { HomeComponent } from "./Components/HomeComponent";
import { LoadingComponent } from "./Components/LoadingComponent";
import { useSpring, animated } from "react-spring";

function App() {
  const opacity = useSpring({
    transform: "translate3d(0px,0,0)",
    from: { transform: "translate3d(0px,0px,0px)" },
  });
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
