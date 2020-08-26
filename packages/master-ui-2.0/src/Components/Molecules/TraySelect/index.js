import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import Picker from 'react-mobile-picker';
import ButtonLink from "../../Atom/ButtonLink";
import Text from "../../Atom/Text";

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
  return props ? slideIn : slideOut;
}

const TraySelectWrapper = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  animation: ${props => handleAnimate(props.isOpen)} 300ms ease;
  z-index: ${props => props.theme.zindex.modal};
`;

const TraySelectOverlay = styled.div`
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

const TraySelectHeader = styled.div`
  width: 100%;
  padding: 16px;
  font-size: 14px;
  text-align: right;
  border-top: 1px solid ${props => props.theme.color.black30};
  background-color: ${props => props.theme.color.white};
`;

const TraySelectContent = styled.div`
  background-color: ${props => props.theme.color.black20};
  transition: width .3s ease;
`;

const TraySelect = props => {
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
      {(props.backdrop === true || props.backdrop === "static" || props.backdrop === "true") && <TraySelectOverlay {...props} onClick={handleBackdropClick()} />}
      <TraySelectWrapper {...props}>
        <TraySelectHeader>
          <ButtonLink onClick={props.ensureClick}>
            <Text color="success">{props.ensureText}</Text>
          </ButtonLink>
        </TraySelectHeader>
        <TraySelectContent>
          <Picker
            optionGroups={props.optionGroups}
            valueGroups={props.valueGroups}
            onChange={props.onChange}
            height={108}
            itemHeight={36} />
        </TraySelectContent>
      </TraySelectWrapper>
    </>,
    document.body
  )
};


TraySelect.defaultProps = {
  backdrop: true,
}

TraySelect.propTypes = {
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['static', 'true', 'false'])]),
}

TraySelect.displayName = "TraySelect";
export default TraySelect;