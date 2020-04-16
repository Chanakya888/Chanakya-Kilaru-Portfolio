import React from "react";
import { HelpComponent } from "./IndividualComponents/HelpComponent";
import { AboutComponent } from "./IndividualComponents/AboutComponent";
import { WorkComponent } from "./IndividualComponents/WorkComponent";
import { Euff } from "./IndividualComponents/NestedWorkComponents/Euff";
import { Tedx } from "./IndividualComponents/NestedWorkComponents/Tedx";
import { Tsundoku } from "./IndividualComponents/NestedWorkComponents/Tsundoku";
import { Donut } from "./IndividualComponents/NestedWorkComponents/Donut";

export const Validate = (props) => {
  const value = props.value.toLowerCase();

  if (value === "about") {
    return <AboutComponent />;
  } else if (value === "work") {
    return <WorkComponent />;
  } else if (value === "euff") {
    return <Euff />;
  } else if (value === "tsundoku") {
    return <Tsundoku />;
  } else if (value === "tedx") {
    return <Tedx />;
  } else if (value === "donut") {
    return <Donut />;
  } else {
    return <HelpComponent />;
  }
};

export default Validate;
