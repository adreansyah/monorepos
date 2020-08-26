import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Spinner from "../Spinner";
import { spacing, sizing } from "../../Utils";

const StyledButton = styled.button`
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  display: inline-flex;
  border: 1px solid transparent;
  border-radius: ${props => props.theme.border.radius};
  min-width: 120px;
  height: ${props => props.theme.btnSize[props.size]["height"]};
  padding: ${props => props.theme.btnSize[props.size]["padding"]};
  box-sizing: border-box;

  background-color: ${props =>
    props.theme.btnVariant[props.variant]["background"]};
  color: ${props => props.theme.btnVariant[props.variant]["text"]};
  border-color: ${props => props.theme.btnVariant[props.variant]["border"]};

  font-family: inherit;
  font-size: ${props => props.theme.btnSize[props.size]["fontSize"]};
  font-weight: 500;
  text-align: center;
  white-space: nowrap;

  /* transition: all 0.3s; */
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.theme.btnVariant[props.variant]["hover"]};
    color: ${props => props.theme.btnVariant[props.variant]["hoverText"]};
  }

  &:focus {
    outline: none;
    background-color: ${props =>
      props.theme.btnVariant[props.variant]["focus"]};
  }

  &:disabled {
    background-color: ${props =>
      props.theme.btnVariant[props.variant]["disabled"]};
    color: ${props => props.theme.btnVariant[props.variant]["disabledText"]};
    cursor: default;
  }

  &:link,
  &:visited,
  &:focus {
    text-decoration: none;
  }

  &[type="button"],
  &[type="reset"],
  &[type="submit"] {
    -webkit-appearance: none;
  }

  ${spacing};
  ${sizing};

  ${props =>
    props.spinner &&
    css`
      text-indent: -9999px;
      *:not(${Spinner}) {
        display: none;
      }
    `}
`;

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {props.spinner ? <Spinner color="#FFFFFF" position="absolute" p={8} /> : ""}
      {children}
    </StyledButton>
  );
};

//Default Props
Button.defaultProps = {
  variant: "primary",
  size: "medium"
};

//Props Validation
Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "primary-alt",
    "secondary",
    "secondary-alt"
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"])
};

export default Button;
