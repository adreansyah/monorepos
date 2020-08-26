import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import InputControl from "../InputControl"

const CheckBoxControl = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  position: relative;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: ${props => props.theme.border.radius};
  background: white;
  border: 1px solid #bebebe;
`;

const CheckBoxItem = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: ${props => props.theme.border.radius};
  width: 16px;
  height: 16px;
  margin-right: 4px;
  &:hover + ${CheckBoxLabel} {
    border-color: ${props => props.theme.color.primary};
  }
  &:checked + ${CheckBoxLabel} {
    background: ${props => props.theme.color.primary};
    border-color: ${props => props.theme.color.primary};
    &::after {
      content: "";
      position: absolute;
      left: 3px;
      top: 3px;
      height: 5px;
      width: 9px;
      border-left: 2px solid ${props => props.theme.color.white};
      border-bottom: 2px solid ${props => props.theme.color.white};
      transform: rotate(-45deg);
    }
  }
  &[data-checked="full"] + ${CheckBoxLabel} {
    background: ${props => props.theme.color.primary};
    border-color: ${props => props.theme.color.primary};
    &::after {
      content: "";
      position: absolute;
      left: 3px;
      top: 3px;
      height: 5px;
      width: 9px;
      border-left: 2px solid ${props => props.theme.color.white};
      border-bottom: 2px solid ${props => props.theme.color.white};
      transform: rotate(-45deg);
    }
  }
  &[data-checked="half"] + ${CheckBoxLabel} {
    background: ${props => props.theme.color.white};
    &::after {
      content: "";
      position: absolute;
      left: 3px;
      top: 4px;
      height: 5px;
      width: 8px;
      border-bottom: 4px solid ${props => props.theme.color.primary};
    }
  }
   &:disabled ~ ${CheckBoxLabel}{
     background-color: #EFF3F6;
     border-color: #DCDEE3;

     &:after{
      border-left-color: #DCDEE3;
      border-bottom-color: #DCDEE3;
     }
   }
`;

const CheckBox = props => {
  const { checkItems, checkProps, selected } = props;
  const idProps = checkProps.id ? checkProps.id : 'check';
  delete checkProps.id;
  const totalItems = checkItems.length;

  const handleCheckItem = value => {
    if (selected)
      return selected.indexOf(value) >= 0 ? true : false;
    else return false
  };

  return (
    <InputControl ps>
      {checkItems.map((item, index) => {
        return (
          <CheckBoxControl key={index}>
            <CheckBoxItem
              type="checkbox"
              id={idProps + (totalItems > 1 ? index : '')}
              value={item.value}
              checked={handleCheckItem(item.value)}
              disabled={item.disabled && item.disabled}
              {...checkProps}
            />
            <CheckBoxLabel />
            <label htmlFor={idProps + (totalItems > 1 ? index : '')}>{item.label}</label>
          </CheckBoxControl>
        );
      })}
    </InputControl>
  );
};

//Props Validation
CheckBox.propTypes = {
  checkItems: PropTypes.array,
  checkProps: PropTypes.object,
  selected: PropTypes.array
};

//Set Display Name
CheckBox.displayName = "CheckBox";
export default CheckBox