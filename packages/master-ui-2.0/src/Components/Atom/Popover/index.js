import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";
import Segment from "../Segment";

const Wrapper = styled(Segment)`
  display: inline-block;
  position: relative;
`;

const Trigger = styled.div`
  position: relative;
  width: auto;
  height: auto;
`;

const Content = styled.div`
  position: absolute;
  display: ${props => (props.isShow ? "flex" : "none")};
  margin-top: 8px;
  width: auto;
  height: auto;
  z-index: ${props => props.theme.zindex.popover};
  left: ${props => props.theme.popoverPosition[props.popoverPosition]["left"]};
  transform: translateX(
    ${props => props.theme.popoverPosition[props.popoverPosition]["transformX"]}
  );
`;

const Popover = ({ children, popoverPosition, hideAfter, ...props }) => {
  const [pop, setPop] = useState(false);
  const handlePopover = params => {
    setPop(params);
  };

  return (
    <Wrapper {...props}>
      {React.Children.map(children, (child, i) => {
        // console.log(child);
        if (child.type.displayName === "PopoverTrigger") {
          return (
            <Trigger
              key={i}
              onMouseDown={() => handlePopover(true)}
              {...child.props}
            >
              {child.props.children}
            </Trigger>
          );
        }
      })}
      {pop
        ? React.Children.map(children, (child, idx) => {
            if (child.type.displayName === "PopoverContent") {
              return (
                <OutsideClickHandler
                  onOutsideClick={() => handlePopover(false)}
                >
                  <Content
                    key={idx}
                    isShow={pop}
                    popoverPosition={
                      popoverPosition ? popoverPosition : "bottom-left"
                    }
                    onClick={() => (hideAfter ? handlePopover(false) : "")}
                  >
                    {child.props.children}
                  </Content>
                </OutsideClickHandler>
              );
            }
          })
        : ""}
    </Wrapper>
  );
};

Trigger.displayName = "PopoverTrigger";
Content.displayName = "PopoverContent";
Popover.Trigger = Trigger;
Popover.Content = Content;

export default Popover;
