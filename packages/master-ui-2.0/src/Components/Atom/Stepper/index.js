import React from "react";
import styled from "styled-components";

const StepperContainer = styled.div`
  position: ${props => props.ps ? props.ps : "relative"};
  display: inline-flex;
`;

const StepperWrapper = styled.div`
  position: relative;

  display: inline-block;
  border: 1px solid ${props => props.theme.color.black30};
  border-right: none;
  vertical-align: middle;
  height: 36px;

  &:first-child {
    border-radius: 4px 0 0 4px;
    & > * {
      border-radius: 3px 0 0 3px;
    }
  }
  &:last-child {
    border-radius: 0 4px 4px 0;
    border-right: 1px solid ${props => props.theme.color.black30};
    & > * {
      border-radius: 0 3px 3px 0;
    }
  }
`;

const StepperButton = styled.button`
  width: 36px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.white};

  font-size: 24px;
  color: ${props => props.theme.color.orange30};

  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${props => props.theme.color.black10};
  }
  &:disabled {
    color: ${props => props.theme.color.black30};
    pointer-events: none;
  }
`;

const StepperInput = styled.input`
  text-align: center;
  width: 42px;
  height: 36px;
  font-size: 14px;
`;

const Stepper = ({ value, limit, ...props }) => {
  const Decrease = () => {
    value = value - 1;
    return props.onChange(value);
  };

  const Increase = () => {
    value = value + 1;
    return props.onChange(value);
  };

  return (
    <StepperContainer>
      <StepperWrapper>
        {value === 0 ? (
          <StepperButton disabled>-</StepperButton>
        ) : (
          <StepperButton onClick={Decrease}>-</StepperButton>
        )}
      </StepperWrapper>
      <StepperWrapper>
        <StepperInput value={value} {...props}></StepperInput>
      </StepperWrapper>
      <StepperWrapper>
        {value === limit ? (
          <StepperButton disabled>+</StepperButton>
        ) : (
          <StepperButton onClick={Increase}>+</StepperButton>
        )}
      </StepperWrapper>
    </StepperContainer>
  );
};

export default Stepper;
