import React from "react"
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButtonGroup = styled.div`
  display: ${props => (props.responsive ? "flex" : "inline-flex")};
  flex: ${props => (props.responsive ? 1 : 0)};
  align-items: center;

  margin-right: -${props => props.space}px;
  margin-left: -${props => props.space}px;

  button {
    margin-right: ${props => props.space}px;
    margin-left: ${props => props.space}px;

    flex: 1
  }
`;

const ButtonGroup = ({children, ...props}) => {
  return (
    <StyledButtonGroup {...props}>
      {children}
    </StyledButtonGroup>
  )
}

//Default Props
ButtonGroup.defaultProps = {
  space: 8
};

//Props Validation
ButtonGroup.propTypes = {
  space: PropTypes.number,
  responsive: PropTypes.bool
};

export default ButtonGroup;