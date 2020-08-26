import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import styled from "styled-components";
import {
  sizing,
  border,
  spacing
} from "../../Utils";

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${props => props.theme.zindex.modalbg};
`;

const ModalContent = styled.div`
    position: relative;
    z-index: 1050;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 8px 0px, rgba(0, 0, 0, 0.17) 0px 7px 20px 0px;
    overflow-wrap: break-word;
    padding: 16px 24px 20px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(208, 204, 204);
    border-image: initial;
    margin: 0px auto;
    height: auto;
    width: 296px;
    border-radius: 10px;
    background-color: #ffffff;
    ${border}
    ${sizing}
    ${spacing}
`;

const ModalHeader = styled.div`
    text-align: left;
    margin-bottom: 16px;
`;

const ModalTitle = styled.h3`
    color: rgb(21, 24, 35);
    font-size: 16px;
    font-weight: 500;
`;

const ModalBody = styled.div`
    position: relative;
`;

const ModalFooter = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: center;
`;

const OverlayClose = styled.div`
    background-color: rgba(21, 24, 35, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
`;

const ModalLite = (props) => {
    const { isOpen, backdrop, toggle, ...innerProps } = props;
    const handleBackdropClick = () => {
        if (backdrop !== "static") {
            return toggle;
        }
    };
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [isOpen]);

    if (!isOpen) return null;
    return ReactDOM.createPortal(
      <ModalWrapper>
          <ModalContent {...innerProps}>
              {props.children}
          </ModalContent>

          {(backdrop === true || backdrop === "static" || backdrop === "true") && <OverlayClose onClick={handleBackdropClick()}></OverlayClose>}
      </ModalWrapper>,
      document.body
    );
};

//Props Default
ModalLite.defaultProps = {
  backdrop: true,
}

//Props Validation
ModalLite.propTypes = {
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['static', 'true', 'false'])]),
}

//Set Display Name
ModalLite.displayName = "ModalLite";

export default ModalLite;
export { ModalHeader, ModalTitle, ModalBody, ModalFooter };
