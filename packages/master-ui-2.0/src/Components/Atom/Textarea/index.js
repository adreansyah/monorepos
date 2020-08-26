import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import InputControl from "../InputControl";
import TextfieldControl from "../Textfield/TextfieldControl";
import TextareaInput from "./TextareaInput";

const TextareaControl = styled(TextfieldControl)`
  max-height: unset;
`;
const Textarea = props => {
  const { model, status, onClick, disabled, inputProps, children } = props;

  const handleStatus = () => {
    if (disabled) {
      return "disabled";
    } else {
      return status;
    }
  };

  return (
    <InputControl>
      <TextareaControl
        className={handleStatus()}
        model={model}
        onClick={onClick}
      >
        <TextareaInput {...inputProps} disabled={disabled}>
          {children}
        </TextareaInput>
      </TextareaControl>
    </InputControl>
  );
};

//Default Props
Textarea.defaultProps = {
  model: "default",
  status: "normal"
};

//Props Validation
Textarea.propTypes = {
  model: PropTypes.oneOf(["default", "line"]),
  status: PropTypes.oneOf(["normal", "success", "error", "autofill"]),
  inputProps: PropTypes.object
};

//Set Display Name
Textarea.displayName = "Textarea";

export default Textarea;
