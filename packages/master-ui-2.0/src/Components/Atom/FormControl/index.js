import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { InputControl } from "../index";
import { spacing } from "../../Utils"

const FormControlWrapper = styled.div`
  position: ${props => (props.ps ? props.ps : "relative")};
  display: block;
  margin-top: ${props => props.inline && "24px"};
  ${spacing}
`;

const FormLabel = styled.label`
  position: ${props => props.theme.formLabel[props.model].position};
  z-index: ${props => props.theme.formLabel[props.model].zindex};
  margin-bottom: ${props => props.theme.formLabel[props.model].marginBottom};
  font-size: ${props => props.theme.formLabel[props.model].fontSize};
  font-weight: ${props => props.theme.formLabel[props.model].fontWeight};
  line-height: ${props => props.theme.formLabel[props.model].lineHeight};
  color: ${props => props.theme.formLabel[props.model].color};
  text-transform: ${props => props.theme.formLabel[props.model].textTransform};

  ${props => {
    if (props.model === "static") {
      return css`
        & + ${InputControl} div {
          padding: 16px 0 8px;
        }
      `;
    }
  }}
`;

const FormHelpText = styled.span.attrs(props => ({
  className: props.status
    ? "form-helptext u-tx-" + props.status
    : "form-helptext"
}))`
  color: ${props => props.theme.color.black50};
  font-size: ${props => props.theme.formHelpText[props.model].fontSize};
  line-height: ${props => props.theme.formHelpText[props.model].lineHeight};
  margin-top: ${props => props.theme.formHelpText[props.model].marginTop};
`;

const FormControl = ({
  model,
  label,
  helptext,
  status,
  children,
  ...props
}) => {
  return (
    <FormControlWrapper {...props}>
      <FormLabel model={model}>{label}</FormLabel>
      {children}
      <FormHelpText model={model} status={status}>
        {helptext}
      </FormHelpText>
    </FormControlWrapper>
  );
};

//Default Props
FormControl.defaultProps = {
  model: "default",
  status: "normal"
};

//Props Validation
FormControl.propTypes = {
  model: PropTypes.oneOf(["default", "static"]),
  status: PropTypes.oneOf(["normal", "success", "error", "autofill"]),
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  helptext: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.object
};

//Set Display Name
FormControl.displayName = "FormControl";
export default FormControl;
