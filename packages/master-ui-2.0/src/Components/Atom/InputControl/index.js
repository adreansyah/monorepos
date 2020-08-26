import PropTypes from "prop-types";
import styled from "styled-components";

const InputControl = styled.div.attrs(props => ({
  className: "input-control"
}))`
  position: ${props => (props.pos ? props.pos : "relative")};
  height: auto;
  width: auto;
  box-sizing: border-box;
`;

InputControl.propTypes = {
  pos: PropTypes.string
};

export default InputControl