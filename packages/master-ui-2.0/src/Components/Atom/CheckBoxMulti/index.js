import React from "react";
import styled from "styled-components";

const CheckBoxWrapper = styled.div`
  position: ${props => props.ps ? props.ps : "relative"};
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

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
  &[data-checked="all"] + ${CheckBoxLabel} {
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
`;

const CheckBoxMulti = ({
  state,
  label,
  helpText,
  selected,
  checkItems,
  right,
  left,
  parentProps,
  checkProps,
  ...props
}) => {
  const CheckBoxValidation = (selected, item) => {
    return selected.includes(item);
  };

  return (
    <CheckBoxWrapper>
      {checkItems.map(item => {
        if (item.hasOwnProperty("parent")) {
          return (
            <CheckBoxControl key={item.id}>
              <CheckBoxItem
                type="button"
                value={item.value}
                data-id={item.id}
                data-label={item.label}
                data-checked={item.checked}
                {...parentProps}
              />
              <CheckBoxLabel />
              <p>{item.label}</p>
            </CheckBoxControl>
          );
        } else if (item.hasOwnProperty("parentId")) {
          return (
            <CheckBoxControl key={item.id} style={{ marginLeft: 12 }}>
              <CheckBoxItem
                type="checkbox"
                value={item.value}
                data-id={item.id}
                data-label={item.label}
                checked={
                  selected
                    ? CheckBoxValidation(selected, item.id)
                    : item.selected
                }
                {...checkProps}
              />
              <CheckBoxLabel />
              <p>{item.label}</p>
            </CheckBoxControl>
          );
        } else {
          return (
            <CheckBoxControl key={item.id}>
              <CheckBoxItem
                type="checkbox"
                value={item.value}
                data-id={item.id}
                data-label={item.label}
                checked={
                  selected
                    ? CheckBoxValidation(selected, item.id)
                    : item.selected
                }
                {...checkProps}
              />
              <CheckBoxLabel />
              <p>{item.label}</p>
            </CheckBoxControl>
          );
        }

        // <React.Fragment>
        //   <CheckBoxControl key={item.id}>
        //     <CheckBoxItem
        //       type="checkbox"
        //       value={item.value}
        //       data-label={item.label}
        //       checked={item.selected}
        //       {...batchProps}
        //     />
        //     <CheckBoxLabel />
        //     <p>{item.label}</p>
        //   </CheckBoxControl>
        //   {item.child.map(child => {
        //     return (
        //       <CheckBoxControl key={child.id}>
        //         <CheckBoxItem
        //           type="checkbox"
        //           value={child.value}
        //           data-label={child.label}
        //           checked={child.selected}
        //           {...checkProps}
        //         />
        //         <CheckBoxLabel />
        //         <p>{child.label}</p>
        //       </CheckBoxControl>
        //     );
        //   })}
        // </React.Fragment>
      })}
    </CheckBoxWrapper>
  );
};

export default CheckBoxMulti;
