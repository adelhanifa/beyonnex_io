import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  inputsNames,
  Creators as valuesActions,
} from "../../redux/ducks/values";
import PropTypes from "prop-types";
import { formValidation } from "../../hooks/isValid";
import { calculateDegree } from "../../hooks/getDegrees";

function Form({ valuesState, valuesActions }) {
  const inputValidDefult = { min: true, max: true, target: true };

  const [minValue, setMinValue] = useState(valuesState.min);
  const [maxValue, setMaxValue] = useState(valuesState.max);
  const [targetValue, setTargetValue] = useState(valuesState.target);
  const [isInputsValid, setIsInputsValid] = useState({ ...inputValidDefult });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setIsInputsValid({ ...inputValidDefult }); //reset valid values.

    // check which input is changed and set the new value by removing (no numbers)
    switch (name) {
      case inputsNames.MIN:
        setMinValue(+value.replace(/\D/g, ""));
        break;
      case inputsNames.MAX:
        setMaxValue(+value.replace(/\D/g, ""));
        break;
      case inputsNames.TARGET:
        setTargetValue(+value.replace(/\D/g, ""));
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValid = formValidation(minValue, maxValue, targetValue); // get inputs validations values

    // check if all inputs are valid
    if (inputValid.min && inputValid.max && inputValid.target) {
      // check if the inputs are changed
      if (
        minValue !== valuesState.min ||
        maxValue !== valuesState.max ||
        targetValue !== valuesState.target
      ) {
        const deg = calculateDegree(minValue, maxValue, targetValue); // to calculate the rotate degree
        valuesActions.updateValues({
          min: minValue,
          max: maxValue,
          target: targetValue,
          degrees: deg,
        }); // send the  new values to store
      }
    } else {
      setIsInputsValid({ ...inputValid }); // set the new inputs validations values
    }
  };

  return (
    <form id="form" onSubmit={(e) => handleSubmit(e)}>
      <h1 className="formTitle">Please Enter the following values:</h1>

      <div className="inputsContainer">
        <div className="formGroupe">
          <label className="formLabel">Minimum temperature:</label>
          <input
            className={`formInput ${!isInputsValid.min && "notValid"}`}
            type="number"
            name={inputsNames.MIN}
            value={minValue}
            required
            min={0}
            max={maxValue}
            onChange={(e) => handleOnChange(e)}
          />
        </div>

        <div className="formGroupe">
          <label className="formLabel">Maximum temperature:</label>
          <input
            className={`formInput ${!isInputsValid.max && "notValid"}`}
            type="number"
            name={inputsNames.MAX}
            value={maxValue}
            required
            min={minValue}
            max={1000}
            onChange={(e) => handleOnChange(e)}
          />
        </div>

        <div className="formGroupe">
          <label className="formLabel">Target temperature:</label>
          <input
            className={`formInput ${!isInputsValid.target && "notValid"}`}
            type="number"
            name={inputsNames.TARGET}
            value={targetValue}
            required
            min={minValue}
            max={maxValue}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
      </div>

      <div className="formGroupe">
        <button
          type="submit"
          className="submit"
          disabled={
            !isInputsValid.min || !isInputsValid.max || !isInputsValid.target
          } // disable the button untill change the inputs again
        >
          Apply
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  valuesState: PropTypes.object,
  valuesActions: PropTypes.object,
};

const mapStateToProps = (state) => ({
  valuesState: state.valuesReducer,
});

const mapDispatchToProps = (dispatch) => ({
  valuesActions: bindActionCreators(valuesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
