import React from "react";
import { select, text } from "@storybook/addon-knobs";
import { Tooltip, TooltipContent, TooltipTarget, Icon, Button } from "../../../Components/Atom";
import mdx from "./Tooltip.mdx";

const color = ["light", "dark"];
const position = [
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
];
const type = ["hover", "click"];

//Sharing Knobs
const knobsTooltipContent = () => text("Content", "Lorem Ipsum", "Tooltip");
const knobsTooltipColor = () => select("Color", color, "dark", "Tooltip");
const knobsTooltipPosition = () => select("Placement", position, "top", "Tooltip");
const knobsTooltipType = () => select("Type", type, "hover", "Tooltip");

export default {
    title: "Atom/Tooltip",
    component: Tooltip,
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

const styleBox = {
    width: "100%",
    height: "10em",
    display: "flex",
    flex: "1",
    placeContent: "center",
    placeItems: "center",
};

export const Basic = () => {
    return (
        <>
            <div style={styleBox}>
                <div>
                    <Tooltip type={knobsTooltipType()} placement={knobsTooltipPosition()} color={knobsTooltipColor()}>
                        <TooltipTarget>
                            <Icon name="information" size="20px" />
                        </TooltipTarget>
                        <TooltipContent>{knobsTooltipContent()}</TooltipContent>
                    </Tooltip>
                </div>
            </div>
            <div style={styleBox}>
                <Tooltip type={knobsTooltipType()} placement={knobsTooltipPosition()} color={knobsTooltipColor()}>
                    <TooltipTarget>
                        <Icon name="attention" size="20px" />
                    </TooltipTarget>
                    <TooltipContent>{knobsTooltipContent()}</TooltipContent>
                </Tooltip>
            </div>
            <div style={styleBox}>
                <Tooltip type={knobsTooltipType()} placement={knobsTooltipPosition()} color={knobsTooltipColor()}>
                    <TooltipTarget>
                        <Icon name="tag" size="20px" />
                    </TooltipTarget>
                    <TooltipContent>{knobsTooltipContent()}</TooltipContent>
                </Tooltip>
            </div>
        </>
    );
};


export const Type = () => {
    return (
        <>
            <div style={styleBox}>
                <div>
                    <Tooltip type={"click"}>
                        <TooltipTarget>
                            <Button variant="secondary">Click</Button>
                        </TooltipTarget>
                        <TooltipContent>{"Lorem Ipsum"}</TooltipContent>
                    </Tooltip>
                </div>
            </div>
            <div style={styleBox}>
                <div>
                    <Tooltip type={"hover"}>
                        <TooltipTarget>
                            <Button variant="secondary">Hover</Button>
                        </TooltipTarget>
                        <TooltipContent>{"Lorem Ipsum"}</TooltipContent>
                    </Tooltip>
                </div>
            </div>
        </>
    );
};

export const Color = () => {
    return (
        <>
            <div style={styleBox}>
                <div>
                    <Tooltip color="light" type="hover">
                        <TooltipTarget>
                            <Button variant="secondary">Light</Button>
                        </TooltipTarget>
                        <TooltipContent>{"Lorem Ipsum"}</TooltipContent>
                    </Tooltip>
                </div>
            </div>
            <div style={styleBox}>
                <div>
                    <Tooltip color="dark" type="hover">
                        <TooltipTarget>
                            <Button variant="secondary">Dark</Button>
                        </TooltipTarget>
                        <TooltipContent>{"Lorem Ipsum"}</TooltipContent>
                    </Tooltip>
                </div>
            </div>
        </>
    );
};

export const Placement = () => {
    return (
        <>
            <div style={styleBox}>
                <div>
                    <Tooltip placement={"right"}>
                        <TooltipTarget>
                            <Button variant="secondary">Placement Right</Button>
                        </TooltipTarget>
                        <TooltipContent>{"lorem Ipsum"}</TooltipContent>
                    </Tooltip>
                </div>
            </div>
        </>
    );
};