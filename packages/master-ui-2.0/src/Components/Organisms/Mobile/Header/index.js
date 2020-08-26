
import React, {useRef, useEffect, useState}from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ButtonLink from '../../../Atom/ButtonLink';

const HeaderWrapper = styled.div`
  display: flex;
  position: ${props => (props.fixed ? 'fixed' : 'relative')};
  z-index: 1020;
  top:0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 10px 8px;
  align-items: center;
  background-color: ${props => props.theme.color.white};
  color: ${props => props.theme.color.black70};
  border-bottom: ${props => (props.border ? `1px solid` + props.theme.color.black20 : "none") };
  ${ButtonLink} {
    height: auto;
  }

`;
const HeaderLeft = styled.div`
  margin-right: 16px;
  justify-content: flex-start;
  width: auto;
`;

const HeaderRight = styled.div`
  margin-left: 16px;
  justify-content: flex-end;
  width: auto;
  text-align: right;
`;

const HeaderBody = styled.div`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
`;

const GhostElemment = styled.div`
  width: 100%;
  position: relative;
`

const Header = ({...props}) => {
  const [headerHeight, setheaderHeight] = useState(0)
  const getHeader = useRef()

  useEffect(() => {
    const getHeaderHeight = getHeader.current.offsetHeight;
    if(getHeaderHeight){
      setheaderHeight(getHeaderHeight);
    }
  }, [getHeader])
  
  return(
    <>
      <HeaderWrapper {...props} ref={getHeader}>
        {props.children}
      </HeaderWrapper>
      
      {props.fixed && <GhostElemment style={{ height: headerHeight}}/>}
    </>
  ); 
};

//set propTypes
Header.propTypes = {
  fixed: PropTypes.bool,
  border: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

//set defaultProps
Header.defaultProps = {
  fixed: false,
  border: false
}

Header.displayName = "Header";
HeaderLeft.displayName = "HeaderLeft";
HeaderRight.displayName = "HeaderRight";
HeaderBody.displayName = "HeaderBody";
export {Header, HeaderLeft, HeaderRight, HeaderBody};