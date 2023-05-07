import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Thermometer({ valuesState }) {
  const [degValue, setDegValue] = useState(valuesState.degrees);

  useEffect(() => {
    if (degValue !== valuesState.degrees) { // check if the degree value changed
      setDegValue(valuesState.degrees);
    }
  }, [valuesState.degrees, degValue]);

  return (
    <div id="thermometer">
      <div id="pointer" style={{ transform: `rotate(${degValue}deg)` }}></div>
      <div className="lineOutSide lineMin"></div>
      <div className="lineOutSide lineMax"></div>
    </div>
  );
}

Thermometer.propTypes = {
  valuesState: PropTypes.object,
};

const mapStateToProps = (state) => ({
  valuesState: state.valuesReducer,
});

export default connect(mapStateToProps)(Thermometer);
