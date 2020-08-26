import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
      opacity: 0;
      visibility: hidden;
    }
    to {
      opacity: 1;
      visibility: visible;
    }
`
const fadeOut = keyframes`
    from {
      opacity: 1;
      visibility: visible;
    }
    to {
      opacity: 0;
      visibility: hidden;
`

const handleAnimate = (props) => {
  return props ? fadeIn : fadeOut
}

const TrayFullWrapper = styled.div`
  position: fixed;
  z-index: ${props => props.theme.zindex.modal};
  bottom: 0px;
  left: 0px;
  overflow-y: auto;
  width: 100%;
  height:100%;
  animation: ${props => handleAnimate(props.isOpen)} 300ms ease;
  background-color: ${props => props.theme.color.black20};
`;

const TrayFull = ({ children, ...props }) => {
  const [isHide, setIsHide] = useState(true)
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
      <TrayFullWrapper {...props}>
        {children}
      </TrayFullWrapper>
    </>,
    document.body
  );
};

TrayFull.defaultProps = {
  isOpen: false
};

TrayFull.propTypes = {
  isOpen: PropTypes.bool,
  overlayClick: PropTypes.func
}

TrayFull.displayName = "TrayFull";

export default TrayFull;
