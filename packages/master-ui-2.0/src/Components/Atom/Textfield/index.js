import React from "react";
import PropTypes from "prop-types";
import InputControl from "../InputControl";
import TextfieldControl from "./TextfieldControl";
import { TextfieldInput, Right, Left } from "./TextfieldInput";

const Textfield = props => {
  const { model, status, right, onClick, left, disabled, inputProps } = props;

  const handleStatus = () => {
    if (disabled) {
      return "disabled";
    } else {
      return status;
    }
  };
  return (
    <InputControl>
      <TextfieldControl
        className={handleStatus()}
        model={model}
        onClick={onClick}
      >
        {left && <Left tabIndex="-1">{left}</Left>}
        <TextfieldInput {...inputProps} />
        {right && <Right tabIndex="-1">{right}</Right>}
      </TextfieldControl>
    </InputControl>
  );
};

//Default Props
Textfield.defaultProps = {
  model: "default",
  status: "normal"
};

//Props Validation
Textfield.propTypes = {
  model: PropTypes.oneOf(["default", "line"]),
  status: PropTypes.oneOf(["normal", "success", "error", "autofill"]),
  inputProps: PropTypes.object
};

//Set Display Name
Textfield.displayName = "Textfield";

export default Textfield;
