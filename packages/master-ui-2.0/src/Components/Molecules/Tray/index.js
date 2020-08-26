import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import styled, { keyframes } from "styled-components";
import { StyledIcon } from "../../Atom/Icon";

const slideIn = keyframes`
    from {
      opacity: 0;
      -webkit-transform: translate(0, 50%);
      transform: translate(0, 50%);
    }
    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
`
const slideOut = keyframes`
    from {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
    to {
      opacity: 0;
      -webkit-transform: translate(0, 50%);
      transform: translate(0, 50%);
    }
`

const handleAnimate = (props) => {
  return props ? slideIn : slideOut
}

const TrayWrapper = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  animation: ${props => handleAnimate(props.isOpen)} 300ms ease;
  z-index: ${props => props.theme.zindex.modal};
`;

const TrayOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  opacity: ${props => (props.isOpen ? "1" : "0")};
  background-color: rgba(21, 24, 35, 0.8);
  transition: all 300ms ease;
  z-index: ${props => props.theme.zindex.modalbg};
`;

const TrayHeader = styled.div`
  display: inline-flex;
  width: 100%;
  padding: 16px;
  background-color: #FFFFFF;
  border-radius: 16px 16px 0px 0px;
  border-top: 1px solid  ${props => props.theme.color.black30};
  border-bottom: 1px solid  ${props => props.theme.color.black30};
  justify-content: space-between;
  ${StyledIcon} {
    text-align: right;
    font-size:24px;
  }
`;

const TrayTitle = styled.h3`
  color: ${props => props.theme.color.black70};
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`;

const TrayContent = styled.div`
  max-height:240px;
  background-color: #FFFFFF;
  overflow-y: auto;
`;

const TrayFooter = styled.div`
  padding: 16px;
  border-top: 1px solid ${props => props.theme.color.black30};
  background-color: ${props => props.theme.color.white};
`;

const Tray = ({ children, ...props }) => {
  const [isHide, setIsHide] = useState(true)
  const handleBackdropClick = () => {
    if (props.backdrop !== "static") {
      return props.overlayClick;
    }
  };

  useEffect(() => {
    document.body.style.overflow = props.isOpen ? "hidden" : "";
  }, [props.isOpen])


  useEffect(() => {
    if (!props.isOpen) {
      const timer = setTimeout(
        () => {
          setIsHide(true)
        },
        280,
      )
      return () => clearTimeout(timer)
    }
    else {
      setIsHide(false)
    }
  }, [props.isOpen])


  if (isHide) return null;
  return ReactDOM.createPortal(
    <>
      {(props.backdrop === true || props.backdrop === "static" || props.backdrop === "true") && <TrayOverlay {...props} onClick={handleBackdropClick()} />}
      <TrayWrapper {...props}>
        {children}
      </TrayWrapper>
    </>,
    document.body
  );
};

Tray.defaultProps = {
  backdrop: true,
}

Tray.propTypes = {
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['static', 'true', 'false'])]),
}

Tray.displayName = "Tray";
TrayHeader.displayName = "TrayHeader";
TrayContent.displayName = "TrayContent";
TrayFooter.displayName = "TrayFooter";
export default Tray;
export { TrayHeader, TrayTitle, TrayContent, TrayFooter };
