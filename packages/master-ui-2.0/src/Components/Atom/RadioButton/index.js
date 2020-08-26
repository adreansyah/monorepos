import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import InputControl from "../InputControl";

const RadioButtonControl = styled(InputControl)`
  display: flex;
  flex-direction: row;
`;

const RadioButtonItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  position: relative;
  margin-left: 24px;
  &:first-of-type {
    margin-left: 0px;
  }
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;

const RadioButtonItem = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  &:hover + ${RadioButtonLabel} {
    border-color: ${props => props.theme.color.primary};
  }
  &:checked + ${RadioButtonLabel} {
    background: ${props => props.theme.color.primary};
    border-color: ${props => props.theme.color.primary};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 6px;
      height: 6px;
      margin: 4px;
      background: ${props => props.theme.color.white};
    }
  }

  &:disabled ~ ${RadioButtonLabel}{
    background-color: #EFF3F6;
    border-color: #DCDEE3;

    &:after{
     background-color: #DCDEE3;
    }
  }
`;

const RadioButton = props => {
  const { radioItems, radioProps, selected, status } = props;
  const idProps = radioProps.id ? radioProps.id : 'radio';
  delete radioProps.id;
  const totalItems = radioItems.length;

  return (
    <RadioButtonControl className={status}>
      {radioItems.map((item, index) => {
        return (
          <RadioButtonItemWrapper key={index}>
            <RadioButtonItem
              type="radio"
              id={idProps + (totalItems > 1 ? index : '')}
              value={item.value}
              checked={item.value === selected ? true : false}
              disabled={item.disabled && item.disabled}
              {...radioProps}
            />
            <RadioButtonLabel />
            <label htmlFor={idProps + (totalItems > 1 ? index : '')}>{item.label}</label>
          </RadioButtonItemWrapper>
        );
      })}
    </RadioButtonControl>
  );
};

//Props Validation
RadioButton.propTypes = {
  radioItems: PropTypes.array,
  radioProps: PropTypes.object,
  selected: PropTypes.string
};

export default RadioButton;
