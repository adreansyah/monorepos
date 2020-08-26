import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../../../Theme";
import { spacing, sizing } from "../../Utils"
import GlyphIcons from "./GlyphIcons";
import SpecialIcons from "./SpecialIcons";
import SocialMediaIcons from "./SocialMediaIcons";
import MulticolorIcons from "./MulticolorIcons";

const StyledIcon = styled.i`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.theme.iconSize[props.size]};
  height: ${props => props.theme.iconSize[props.size]};
  pointer-events: none;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    fill: $black-50;
    background-position: center;

    transition-property: background-image;
    transition-duration: 0.5s;
  }
  &:hover {
    &:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
      fill: $black-50;
      background-position: center;
    }
  }
  &[type="button"] & {
    cursor: pointer;
  }

  ${spacing};
  ${sizing};
`;

const Icon = props => {
  const { fillColor, size, active, variant } = props;

  let fill = "";

  if (theme.color.hasOwnProperty(fillColor)) {
    fill = theme.color[fillColor]
  } else {
    fill = fillColor
  }

  const iconProps = { fill, size };

  let svgSize = "";
  switch (size) {
    case "small":
      svgSize = "16px";
      break;
    case "large":
      svgSize = "24px";
      break;
    default:
      svgSize = size;
      break;
  }

  return (
    <StyledIcon {...props}>
      {
        variant === 'special' ? <SpecialIcons name={props.name} size={svgSize} color={fill} active={active} />
          : variant === 'multicolor' ? <MulticolorIcons name={props.name} size={svgSize} active={active} />
            : variant === 'social-media' ? <SocialMediaIcons name={props.name} size={svgSize} color={fill} active={active} />
              : <GlyphIcons name={props.name} size={svgSize} color={fill} />
      }
    </StyledIcon>
  );
};

//Default Props
Icon.defaultProps = {
  name: "",
  size: "small",
  fillColor: theme.color['light'],
  variant: "default"
};

//Props Validation
Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fillColor: PropTypes.string,
  variant: PropTypes.string,
};

//Set Display Name
Icon.displayName = "Icon";

export { StyledIcon };
export default Icon;
