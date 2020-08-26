import React from "react";
import styled from "styled-components";
import {
  color,
  sizing,
  spacing,
  border,
  position,
  flexbox,
  display
} from "../../Utils";

const StyledSegment = styled.div`
  &&& {
    ${position};
    ${display}
    ${flexbox};
    ${sizing}
    ${spacing};
    ${color}
    ${border};
  }
`;

const Segment = props => {
  return <StyledSegment {...props}>{props.children}</StyledSegment>;
};

export default Segment;
