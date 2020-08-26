import React from "react";
import styled from "styled-components";
import { color, spacing } from "../../Utils";

const getRadius = props => ({
    borderRadius: props.round !== undefined ? (props.round === true ? 50 : props.round) : "0.25em"
});

const getFontSize = props => ({
    fontSize: props.fontSize ? props.fontSize : "85%"
});

const BadgeWrap = styled.span`
    display: inline-block;
    font-weight: ${props => (props.bold ? "bold" : "normal")};
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    padding: 0.4em;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    ${color}
    ${spacing}
    ${getRadius}
    ${getFontSize}
`;
const defaultProps = {
    color: "white",
    bg: "primary",
    bold: false
};

const Badge = ({ ...props }) => {
    return <BadgeWrap {...props}>{props.children}</BadgeWrap>;
};

Badge.defaultProps = defaultProps;

export default Badge;
