import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { Manager, Popper, Reference } from "react-popper";
import styled, { css } from "styled-components";
import { sizing, spacing } from "../../Utils";

const getBorderColor = color => css`
    ${props => (color === "light" ? props.theme.color.white : color === "dark" ? props.theme.color.black60 : props.theme.color.black60)}
`;

const TooltipWrapper = styled.div`
    position: relative;
    display: inline-block;
    pointer: cursor;
`;

const TooltipContentWrapper = styled.div`
    z-index: ${props => props.theme.zindex.tooltip};
`;
const TooltipContent = styled.div`
    z-index: 1;
    width: 160px;
    min-height: 46px;
    padding: 16px;
    box-shadow: 0 1px 8px 0 rgba(112, 114, 125, 0.6);
    border-radius: 4px;
    background-color: ${props => props.theme.tooltipColor[props.color]["backgroundColor"]};
    color: ${props => props.theme.tooltipColor[props.color]["color"]};
    text-align: left;
    font-size: 12px;
    transition: opacity 0.3s;
    pointer-events: none;
    ${sizing}
    ${spacing}
`;

const Arrow = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    margin: 5px;

    &[data-placement*="bottom"] {
        border-width: 0 6px 6px 6px;
        border-color: transparent transparent ${props => getBorderColor(props.color)} transparent;
        top: -6px;
        margin-top: 0;
        margin-bottom: 0;
    }
    &[data-placement*="top"] {
        border-width: 6px 6px 0 6px;
        border-color: ${props => getBorderColor(props.color)} transparent transparent transparent;
        bottom: -6px;
        margin-top: 0;
        margin-bottom: 0;
    }
    &[data-placement*="right"] {
        border-width: 6px 6px 6px 0;
        border-color: transparent ${props => getBorderColor(props.color)} transparent transparent;
        left: -6px;
        margin-left: 0;
        margin-right: 0;
    }
    &[data-placement*="left"] {
        border-width: 6px 0 6px 6px;
        border-color: transparent transparent transparent ${props => getBorderColor(props.color)};
        right: -6px;
        margin-left: 0;
        margin-right: 0;
    }
`;
const TooltipTarget = styled.div`
    display: inline-block;
`;
const Tooltip = props => {
    const { placement, type, color, ...innerProps } = props;
    const [isOpen, setOpen] = useState(false);
    const handleClick = () => {
        type === "click" ? setOpen(!isOpen) : {};
    };

    const handleHover = state => {
        if (type === "hover") {
            setOpen(state);
        }
    };

    const tooltipContent = getColor =>
        React.Children.map(props.children, element => {
            return element.type.displayName === "TooltipContent" && React.cloneElement(element, { color: getColor });
        });

    const tooltipTarget = () =>
        React.Children.map(props.children, element => {
            return element.type.displayName === "TooltipTarget" && React.cloneElement(element);
        });

    return (
        <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
            <TooltipWrapper {...innerProps}>
                <Manager>
                    <Reference>
                        {({ ref }) => (
                            <TooltipTarget
                                ref={ref}
                                onClick={() => handleClick()}
                                onMouseOver={() => handleHover(true)}
                                onMouseOut={() => handleHover(false)}
                            >
                                <div>{tooltipTarget()}</div>
                            </TooltipTarget>
                        )}
                    </Reference>

                    {isOpen &&
                        ReactDOM.createPortal(
                            <Popper placement={placement} modifiers={{ offset: { offset: "0, 10px" } }}>
                                {({ placement, ref, style, arrowProps }) => (
                                    <TooltipContentWrapper ref={ref} style={style} data-placement={placement}>
                                        {tooltipContent(color)}
                                        <Arrow ref={arrowProps.ref} style={arrowProps.style} data-placement={placement} color={color} />
                                    </TooltipContentWrapper>
                                )}
                            </Popper>,
                            document.body
                        )}
                </Manager>
            </TooltipWrapper>
        </OutsideClickHandler>
    );
};

//Default Props
Tooltip.defaultProps = {
    type: "hover",
    color: "dark"
};

//Props Validation
Tooltip.propTypes = {
    type: PropTypes.oneOf(["hover", "click"]),
    color: PropTypes.oneOf(["light", "dark"]),
    placement: PropTypes.oneOf([
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
    ])
};

//Set Display Name
Tooltip.displayName = "Tooltip";
TooltipContent.displayName = "TooltipContent";
TooltipTarget.displayName = "TooltipTarget";

export default Tooltip;
export { TooltipContent, TooltipTarget };
