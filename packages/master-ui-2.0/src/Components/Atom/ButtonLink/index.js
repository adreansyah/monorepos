import styled from "styled-components";
import { spacing, sizing } from "../../Utils";

const ButtonLink = styled.button`
  align-items: center;
  justify-content: center;

  display: inline-flex;
  height: ${props => props.theme.btnSize["text"]["height"]};
  /* padding: ${props => props.theme.btnSize["text"]["padding"]}; */
  box-sizing: border-box;
  background-color: transparent;

  color: ${props => props.theme.color.primary};
  font-family: inherit;
  font-size: ${props => props.theme.btnSize["text"]["fontSize"]};
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 16px;

  transition: all 0.3s;
  cursor: pointer;

  ${spacing};
  ${sizing};
`;


//Set Display Name
ButtonLink.displayName = "ButtonLink";
export default ButtonLink;
