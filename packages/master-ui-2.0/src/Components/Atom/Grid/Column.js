import React from "react";
import styled, { css } from "styled-components";
import Segment from "../Segment";

export const StyledCol = styled(Segment)`
    position: relative;
    min-height: 1px;
    flex: 1;

    ${props =>
      props.offset &&
      css`
        margin-left: calc((${props.offset} / 12) * 100%);
      `}

    ${props =>
      props.wide &&
      css`
        flex: 0 0 calc((${props.wide} / 12) * 100%);
        max-width: calc((${props.wide} / 12) * 100%);
      `}

    ${props =>
      props.xs &&
      css`
        @media ${props.theme.device.xs} {
          flex: 0 0 calc((${props.xs} / 12) * 100%);
          max-width: calc((${props.xs} / 12) * 100%);
        }
      `}

    ${props =>
      props.sm &&
      css`
        @media ${props.theme.device.sm} {
          flex: 0 0 calc((${props.sm} / 12) * 100%);
          max-width: calc((${props.sm} / 12) * 100%);
        }
      `}

    ${props =>
      props.md &&
      css`
        @media ${props.theme.device.md} {
          flex: 0 0 calc((${props.md} / 12) * 100%);
          max-width: calc((${props.md} / 12) * 100%);
        }
      `}
    
    ${props =>
      props.lg &&
      css`
        @media ${props.theme.device.lg} {
          flex: 0 0 calc((${props.lg} / 12) * 100%);
          max-width: calc((${props.lg} / 12) * 100%);
        }
      `}

    ${props =>
      props.deskM &&
      css`
        @media ${props.theme.device.deskM} {
          flex: 0 0 calc((${props.deskM} / 12) * 100%);
          max-width: calc(${props.deskM} / 12);
        }
      `}

    ${props =>
      props.deskL &&
      css`
        @media ${props.theme.device.deskL} {
          flex: 0 0 calc(${props.deskL} / 12);
          max-width: calc(${props.deskL} / 12);
        }
      `}
`;

const Col = props => {
  return <StyledCol {...props}>{props.children}</StyledCol>;
};

export default Col;
