
import React, {useRef, useEffect, useState}from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ButtonLink from '../../../Atom/ButtonLink';

const FooterWrapper = styled.div`
  display: flex ;
  flex:1;
  position: ${props => (props.fixed ? 'fixed' : 'relative')};
  z-index: 1020;
  bottom:0;
  left: 0;
  width: 100%;
  padding: 16px;
  background-color: ${props => props.theme.color.white};
  color: ${props => props.theme.color.black70};
  border-top:  ${props => (props.border ? `1px solid` + props.theme.color.black20 : "none") };
`;

const FooterBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  ${ButtonLink} {
    height: auto;
  }
`;

const FooterLeft = styled(FooterBody)`
  justify-content: flex-start;
  width: auto;
  margin-right: 8px;
`;

const FooterRight = styled(FooterBody)`
  justify-content: flex-end;
  width: auto;
`;

const GhostElement = styled.div`
  width: 100%;
  position: relative;
`

const Footer = ({...props}) => {
  const [footerHeight, setfooterHeight] = useState(0)
  const getFooter = useRef()

  useEffect(() => {
    const getFooterHeight = getFooter.current.offsetHeight;
    if(getFooterHeight){
      setfooterHeight(getFooterHeight);
    }
  }, [getFooter])
  
  return(
    <>
      <FooterWrapper {...props} ref={getFooter}>
        {props.children}
      </FooterWrapper>
      
      {props.fixed && <GhostElement style={{ height: footerHeight}}/>}
    </>
  ); 
};

Footer.propTypes = {
  fixed: PropTypes.bool,
  border: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

Footer.defaultProps = {
  fixed: false,
  border: false
}

Footer.displayName = "Footer";
FooterLeft.displayName = "FooterLeft";
FooterBody.displayName = "FooterBody";
FooterRight.displayName = "FooterRight";
export {Footer, FooterLeft, FooterBody, FooterRight};