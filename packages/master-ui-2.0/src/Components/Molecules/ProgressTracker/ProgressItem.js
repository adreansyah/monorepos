import React from "react";
import styled, { css } from "styled-components";
import Icon from "../../Atom/Icon";
import Segment from "../../Atom/Segment";
import Text from "../../Atom/Text";

const ItemLabel = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
`;

const ItemLabelNumber = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${props => props.theme.tracker["stepDefaultBg"]};
  color: ${props => props.theme.tracker["stepDefaultColor"]};
  font-weight: bold;
  flex: 0 0 24px;

  ${props =>
    props.status === "active" &&
    css`
      background-color: ${props => props.theme.tracker["stepActiveBg"]};
      color: ${props => props.theme.tracker["stepActiveColor"]};
    `};

  ${props =>
    props.status === "done" &&
    css`
      background-color: ${props => props.theme.tracker["stepDoneBg"]};
      color: ${props => props.theme.tracker["stepDoneColor"]};
    `};
`;

const ItemDivider = styled.div`
  background-color: ${props => props.theme.tracker["divider"]};
  margin-top: 8px;
  margin-left: 10px;
  border-radius: 2px;

  ${props =>
    props.inline &&
    css`
      margin-top: 0px;
      margin-left: 8px;
    `};
`;

const ItemDescription = styled.div`
  position: absolute;
  left: 32px;
  color: #9c9da6;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
`;

const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-bottom: 8px;

  ${props =>
    props.inline &&
    css`
      margin-left: 8px;
    `};

  &:last-child ${ItemDivider} {
    visibility: hidden;
  }
`;

const ProgressItem = ({ number, label, children, inline, status }) => {
  const IconDone = <Icon name="check" size="small" fillColor="white" />;

  if (inline) {
    return (
      <ItemWrapper inline>
        <ItemLabel>
          <ItemLabelNumber status={status}>
            {status === "done" ? IconDone : number}
          </ItemLabelNumber>
          <Text H16 style={{ flex: "1 1 auto" }}>
            {label}
          </Text>
          <ItemDivider inline />
        </ItemLabel>
        <Segment alignSelf="flex-end">
          <ItemDescription>{children}</ItemDescription>
        </Segment>
      </ItemWrapper>
    );
  } else {
    return (
      <ItemWrapper>
        <ItemLabel>
          <ItemLabelNumber status={status}>
            {status === "done" ? IconDone : number}
          </ItemLabelNumber>
          <Text H16 style={{ flex: "1 1 auto" }}>
            {label}
          </Text>
          <Segment alignSelf="flex-end">
            <ItemDescription>{children}</ItemDescription>
          </Segment>
        </ItemLabel>
        <ItemDivider />
      </ItemWrapper>
    );
  }
};

ProgressItem.ItemDivider = ItemDivider;
export default ProgressItem;
