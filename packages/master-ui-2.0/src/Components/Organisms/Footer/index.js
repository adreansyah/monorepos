
import PropTypes from "prop-types";
import styled from "styled-components";
import ButtonLink from '../../Atom/ButtonLink';

const Footer = styled.div`
  display: ${props => (props.mobile ? "flex" : "inline-flex")};
  flex:1;
  position: ${props => (props.mobile ? "fixed" : "relative")};
  z-index: 1020;
  bottom:0;
  left: 0;
  width: 100%;
  padding: ${props => (props.mobile ? "16px" : "32px 0")};
  background-color: ${props => props.theme.color.white};
  color: ${props => (props.mobile ? props.theme.color.black70 : props.theme.color.black40 )};
  border-top: ${props => (props.mobile ? "1px solid " + props.theme.color.black20 : "none" )};
`;

const FooterBody = styled.div`
  display: flex;
  flex-grow: ${props => (props.mobile ? "7" : "5" )};
  align-items: center;
  justify-content: center;
  ${ButtonLink} {
    height: auto;
  }
`;

const FooterLeft = styled(FooterBody)`
  justify-content: flex-start;
  flex-grow: ${props => (props.mobile ? "1" : "3" )};
  margin-right: 8px;
`;

const FooterRight = styled(FooterBody)`
  justify-content: flex-end;
  flex-grow: ${props => (props.mobile ? "1" : "4" )};
`;

Footer.displayName = "Footer";
FooterLeft.displayName = "FooterLeft";
FooterBody.displayName = "FooterBody";
FooterRight.displayName = "FooterRight";
export {Footer, FooterLeft, FooterBody, FooterRight};