import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon, { StyledIcon } from "../../Atom/Icon";

const Size = {
  small: "400px",
  medium: "600px",
  large: "800px",
  xlarge: "960px"
};

const ModalOverlay = styled.div`
  background-color: rgba(21, 24, 35, 0.8);
  z-index: ${props => props.theme.zindex.modalbg};
`;

const ModalWrapper = styled.div`
  position: relative;
  z-index: ${props => props.theme.zindex.modal};

  width: ${props =>
    props.size ? Size[props.size] : Size[props.size["medium"]]};
  padding: 16px 24px 20px 24px;
  border-radius: $border-radius;
  background-color: ${props => props.theme.color.white};
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  margin: 0 auto;
  word-wrap: break-word;

  ${props =>
    props.orientation === "horizontal" &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
    `}
`;

const ModalHeader = styled.div`
  display: flex;
  height: 40px;
  text-align: left;
  justify-content: space-between;

  ${StyledIcon} {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 16px;
    height: 16px;
  }
`;

const ModalTitle = styled.h3`
  color: ${props => props.theme.color.black70};
  font-size: 16px;
  font-weight: 500;
`;

const ModalContent = styled.div`
  padding: "16px 0 0 0";
  p {
    font-size: 14px;
    line-height: 21px;
  }
`;
const ModalFooter = styled.div`
  display: flex;
  align-content: center;
  > * {
    margin-top: ${props => props.orientation === "horizontal" ? "0px" : "32px"};
    margin-left: ${props => props.orientation === "horizontal" ? "32px" : "0px"};
  }
`;
const ModalSeparator = styled.div`
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  width: 100%;
  height: 1px;
  margin-top: 16px;
  &::before {
    position: absolute;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
    top: 0px;
    left: -24px;
    content: "";
    width: 24px;
    height: 1px;
  }
  &::after {
    position: absolute;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
    top: 0px;
    right: -24px;
    content: "";
    width: 24px;
    height: 1px;
  }
  + ${ModalFooter} {
    > * {
      margin-top: 24px;
    }
  }
`;

const ModalAction = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${props =>
    props.justifyAction ? props.justifyAction : "center"};
`;

const ModalHint = styled.div`
  flex: 1;
  display: flex;
  > div {
    margin: auto 0;
  }

  + ${ModalAction} {
    justify-content: flex-end;
  }
`;

const Modal = ({ ...props }) => {
  return (
    <ModalOverlay>
      <ModalWrapper size={props.size} orientation={props.orientation}>
        <div>
          <ModalHeader>
            {props.title && <ModalTitle>{props.title}</ModalTitle>}
            {props.modalClose && (
              <Icon name="cancel" size="large" fillColor="black50" as="button" />
            )}
            {props.modalLink}
          </ModalHeader>
          <ModalContent>{props.content}</ModalContent>
        </div>
        {props.separator && <ModalSeparator />}
        <ModalFooter orientation={props.orientation}>
          {props.hint && (
            <ModalHint>
              <div>{props.hint}</div>
            </ModalHint>
          )}
          {props.action && (
            <ModalAction justifyAction={props.justifyAction}>
              {props.action}
            </ModalAction>
          )}
        </ModalFooter>
      </ModalWrapper>
    </ModalOverlay>
  );
};

//Default Props
Modal.defaultProps = {
  size: "small",
  orientation: "vertical",
  justifyAction: "center"
};

//Props Validation
Modal.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  justifyAction: PropTypes.oneOf(["flex-start", "center", "flex-end"])
};

//Set Display Name
Modal.displayName = "Modal";
export default Modal;
