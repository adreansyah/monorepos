import React from "react";
import styled, { keyframes } from "styled-components";
import { position, spacing } from "../../Utils";

const Spins = keyframes`
    0% { transform: rotate(0deg)}
  100% { transform: rotate(360deg);}
`;

const SVGSpinner = styled.svg`
  position: relative;
  height: 100%;
  ${spacing};
  ${position};
  circle {
    fill: transparent;
    stroke-dasharray: 140;
    stroke: ${props => props.color ? props.color : props.theme.color.primary};
    stroke-width: 10;
    stroke-dashoffset: 0;
  }
  animation: ${Spins} ${props => props.speed ? props.speed+"s" : "0.5s"} infinite linear;
`;


const Spinner = props => {
  return (
    <SVGSpinner {...props} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" />
    </SVGSpinner>
  );
};

export default Spinner;
