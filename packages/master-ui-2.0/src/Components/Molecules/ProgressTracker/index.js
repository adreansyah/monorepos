import React from "react";
import styled, { css } from "styled-components";
import ProgressItem from "./ProgressItem";

const ProgressWrapper = styled.div`
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  flex-direction: ${props => (props.inline ? "row" : "column")};
  align-items: ${props => (props.inline ? "flex-start" : "stretch")};

  ${ProgressItem.ItemDivider} {
    ${props =>
      props.inline
        ? css`
            /* flex: ${
              props.divider ? `0 1 ${props.divider}px` : `1 1 auto`
            }; */
            width: ${props.divider + "px"};
            height: 4px;
          `
        : css`
            /* flex: ${
              props.divider ? `0 1 ${props.divider}px` : `1 1 auto`
            }; */
            height: ${props.divider + "px"};
            width: 4px;
          `}
  }
`;

const ProgressTracker = ({ step, label, ...props }) => {
  let activeFound = false;

  const childrenWithProps = React.Children.map(props.children, (child, idx) => {
    const childKey = child.key;
    const childNumber = idx + 1;

    let getStatus = "";
    if (step === childKey) {
      getStatus = "active";
      activeFound = true;
    } else {
      getStatus = !activeFound ? "done" : "";
    }

    // console.log(childNumber, activeFound);

    return React.cloneElement(child, {
      number: childNumber,
      inline: props.inline ? true : false,
      status: getStatus
    });
  });

  return <ProgressWrapper {...props}>{childrenWithProps}</ProgressWrapper>;
};

ProgressTracker.Item = ProgressItem;

export default ProgressTracker;
