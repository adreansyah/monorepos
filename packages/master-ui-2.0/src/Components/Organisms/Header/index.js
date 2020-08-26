
import PropTypes from "prop-types";
import styled from "styled-components";
import ButtonLink from '../../Atom/ButtonLink';

const Header = styled.div`
  display: ${props => (props.mobile ? "inline-flex" : "flex")};
  position: fixed;
  z-index: 1020;
  top:0;
  left: 0;
  width: 100%;
  padding: ${props => (props.mobile ? "10px 8px" : "12px 0")};
  align-items: center;
  background-color: ${props => props.theme.color.white};
  color: ${props => (props.mobile ? props.theme.color.black70 : props.theme.color.black50 )};
  border-bottom:  ${props => (props.mobile ? "1px solid " + props.theme.color.black20 : "none" )};
  ${ButtonLink} {
    height: auto;
  }

`;
const HeaderLeft = styled.div`
  flex-grow: ${props => (props.mobile ? "1" : "2" )};
  justify-content: flex-start;
`;

const HeaderRight = styled(HeaderLeft)`
  justify-content: flex-end;
  flex-grow: ${props => (props.mobile ? "2" : "7" )};
  text-align: right;
`;

const HeaderBody = styled(HeaderLeft)`
  flex-grow: ${props => (props.mobile ? "9" : "3" )};
  font-size: 16px;
  font-weight: 500;
`;

Header.propTypes = {
  mobile: PropTypes.bool
};

Header.displayName = "Header";
HeaderLeft.displayName = "HeaderLeft";
HeaderRight.displayName = "HeaderRight";
HeaderBody.displayName = "HeaderBody";
export {Header, HeaderLeft, HeaderRight, HeaderBody};