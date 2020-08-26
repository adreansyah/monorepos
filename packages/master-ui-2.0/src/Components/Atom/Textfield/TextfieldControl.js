import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const TextfieldControl = styled.div`
  position: ${props => (props.ps ? props.ps : "relative")};
  display: flex;
  align-items: center;
  border-collapse: separate;
  max-height: 40px;
  background-color: ${props => props.theme.color.white};

  &:has(input:-webkit-autofill) {
    background-color: ${props =>
      props.theme.inputStatus["error"]["background"]};
  }
  &:focus-within {
    background-color: ${props =>
      props.theme.inputStatus["normal"]["background"]};
  }
  &.focus-open,
  &.option-open {
    background-color: ${props =>
      props.theme.inputStatus["normal"]["background"]};
  }
  &.option-open {
    border-bottom: none;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  &.error {
    background-color: ${props =>
      props.theme.inputStatus["error"]["background"]};
  }
  &.success {
    background-color: ${props =>
      props.theme.inputStatus["success"]["background"]};
  }
  &.disabled {
    background-color: ${props =>
      props.theme.inputStatus["disabled"]["background"]};
    input {
      pointer-events: none;
    }
  }

  ${props =>
    props.model === "default" &&
    css`
      border: ${props => props.theme.border.base};
      border-radius: ${props => props.theme.border.radius};
      padding: 12px 16px;

      &:has(input:-webkit-autofill) {
        border: 1px solid ${props => props.theme.inputStatus["error"]["border"]};
      }
      &:focus-within {
        border: 1px solid
          ${props => props.theme.inputStatus["normal"]["border"]};
      }
      &.focus-open,
      &.option-open {
        border: 1px solid
          ${props => props.theme.inputStatus["normal"]["border"]};
      }
      &.option-open {
        border-bottom: none;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
      }
      &.error {
        border: 1px solid ${props => props.theme.inputStatus["error"]["border"]};
      }
      &.success {
        border: 1px solid
          ${props => props.theme.inputStatus["success"]["border"]};
      }
      &.disabled {
        border: 1px solid
          ${props => props.theme.inputStatus["disabled"]["border"]};
        input {
          pointer-events: none;
        }
      }
    `}

  ${props =>
    props.model === "line" &&
    css`
      border-bottom: 1px solid ${props => props.theme.color.light};
      padding: 12px 0px;
   
      &:has(input:-webkit-autofill ) {
        border-bottom: 1px solid ${props =>
          props.theme.inputStatus["error"]["border"]};
      }
      &:focus-within {
        border-bottom: 1px solid ${props =>
          props.theme.inputStatus["normal"]["border"]};
      }
      &.focus-open,
      &.option-open {
        border-bottom: 1px solid ${props =>
          props.theme.inputStatus["normal"]["border"]};
      }
      &.option-open {
        border-bottom: none;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
      }
      &.error {
        border-bottom: 1px solid ${props =>
          props.theme.inputStatus["error"]["border"]};
      }
      &.success {
        border-bottom: 1px solid ${props =>
          props.theme.inputStatus["success"]["border"]};
      }
      &.disabled {
        border-bottom: 1px solid ${props =>
          props.theme.inputStatus["disabled"]["border"]};
        input {
          pointer-events: none;
        }
      }
      
    `}
`;

//Default Props
TextfieldControl.defaultProps = {
  model: "default",
  status: "normal"
};

//Props Validation
TextfieldControl.propTypes = {
  model: PropTypes.oneOf(["default", "line"]),
  status: PropTypes.oneOf(["normal", "success", "error", "autofill"])
};

//Set Display Name
TextfieldControl.displayName = "TextfieldControl";

export default TextfieldControl;
