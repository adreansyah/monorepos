import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SwitchWrapper = styled.label`
  position: ${props => props.ps ? props.ps : "relative"};
  display: inline-flex;
  flex-direction: ${props =>
    props.labelPosition === "right" ? "row-reverse" : "row"};
  align-items: center;
`;

const SwitchSlider = styled.span`
  position: relative;
  display: flex;
  justify-content: ${props => (props.checked ? "flex-start" : "flex-end")};
  align-items: center;
  padding: 0px 8px;
  height: 24px;
  width: ${props => (props.labelInside ? "49px" : "40px")};
  font-size: 10px;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.black30};
  border-radius: 20px;
  cursor: pointer;

  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    top: 1px;
    left: 1px;
    background-color: ${props => props.theme.color.white};
    border-radius: 50%;
    transition: all 200ms ease;
  }
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SwitchSlider} {
    background-color: ${props => props.theme.color.primary};
  }

  &:checked + ${SwitchSlider}:before {
    transform: ${props =>
    props.labelInside ? `translateX(25px)` : `translateX(16px)`};
  }

  /* &:checked + .toggle__slider--label-inside.toggle__slider:before {
    -webkit-transform: translateX(25px);
    -ms-transform: translateX(25px);
    transform: translateX(25px);
  } */

  &:disabled + ${SwitchSlider}:before {
    background-color: ${props => props.theme.color.black20};
  }
`;

const SwitchText = styled.span`
  color: ${props => props.theme.color.black50};
  margin: 0px 4px;
`;

const Switch = ({ label, labelInside, labelPosition, checked, inputProps, ...props }) => {
  const [checkedVal, setCheckedVal] = useState(checked);
  const [labelInsideText, setlLabelInsideText] = useState('');

  useEffect(() => {
    setCheckedVal(checked);
    setlLabelInsideText(checked ? "On" : "Off");
  }, [checked]);

  return (
    <SwitchWrapper labelPosition={labelPosition}>
      {label && <SwitchText>{label}</SwitchText>}
      <SwitchInput type="checkbox" labelInside={labelInside} {...props} checked={checkedVal} />
      <SwitchSlider checked={checked} labelInside={labelInside}>
        {labelInside ? labelInsideText : null}
      </SwitchSlider>
    </SwitchWrapper>
  );
};

export default Switch;
