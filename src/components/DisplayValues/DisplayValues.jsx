import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function DisplayValues({ valuesState }) {
  return (
    <div id="display">
      <div className="minMax">
        <div>{valuesState.min} &#8451;</div>
        <div>{valuesState.max} &#8451;</div>
      </div>
      <div className="target">{valuesState.target} &#8451;</div>
    </div>
  );
}

DisplayValues.propTypes = {
  valuesState: PropTypes.object,
};

const mapStateToProps = (state) => ({
  valuesState: state.valuesReducer,
});

export default connect(mapStateToProps)(DisplayValues);
