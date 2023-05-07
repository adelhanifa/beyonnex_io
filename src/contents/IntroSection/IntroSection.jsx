import React from "react";
import Thermometer from "../../components/Thermometer/Thermometer";
import Form from "../../components/Form/Form";
import DisplayValues from "../../components/DisplayValues/DisplayValues";

function IntroSection() {
  return (
    <div id="intro">
      <div className="container">
        <Form />
        <Thermometer />
        <DisplayValues />
      </div>
    </div>
  );
}

export default IntroSection;
