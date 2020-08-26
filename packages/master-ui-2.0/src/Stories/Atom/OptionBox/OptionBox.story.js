import React from "react";
import { radios, boolean, text } from "@storybook/addon-knobs";
import { OptionBox, Segment } from "../../../Components/Atom";
import mdx from "./OptionBox.mdx";

const behaviors = ["normal", "success", "error"];
const FormBehavior = () => radios("Behaviors", behaviors, "normal", "OptionBox");
const knobsPlaceholder = () => text("placeholder", "select...", "OptionBox");
const knobsSearchable = () => boolean("isSearchable", false, "OptionBox");
const knobsClearable = () => boolean("isClearable", false, "OptionBox");
const knobsLoading = () => boolean("isLoading", false, "OptionBox");
const knobsMulti = () => boolean("isMulti", false, "OptionBox");
const knobsDisabled = () => boolean("isDisabled", false, "OptionBox");
const knobsCreateble = () => boolean("isCreatable", false, "OptionBox");

export default {
    title: "Atom/Option Box",
    component: OptionBox,
    parameters: {
        docs: {
            page: mdx
        }
    }
};

export const Basic = () => {
    const colourOptions = [
        { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
        { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
        { value: "purple", label: "Purple", color: "#5243AA" },
        { value: "red", label: "Red", color: "#FF5630", isFixed: true },
        { value: "orange", label: "Orange", color: "#FF8B00" },
        { value: "yellow", label: "Yellow", color: "#FFC400" },
        { value: "green", label: "Green", color: "#36B37E" },
        { value: "forest", label: "Forest", color: "#00875A" },
        { value: "slate", label: "Slate", color: "#253858" },
        { value: "silver", label: "Silver", color: "#666666" }
    ];
    
    return (
        <>
            <Segment height={300}>
                <OptionBox
                    status={FormBehavior()}
                    defaultValue={colourOptions[0]}
                    isClearable={knobsClearable()}
                    isSearchable={knobsSearchable()}
                    options={colourOptions}
                    isDisabled={knobsDisabled()}
                    isLoading={knobsLoading()}
                    isMulti={knobsMulti()}
                    placeholder={knobsPlaceholder()}
                    isCreatable={knobsCreateble()}
                    inputClassName={"sample-class-in-input"}
                />
            </Segment>
        </>
    );
};

export const MenuPortal = () => {
    const colourOptions = [
        { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
        { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
        { value: "purple", label: "Purple", color: "#5243AA" },
        { value: "red", label: "Red", color: "#FF5630", isFixed: true },
        { value: "orange", label: "Orange", color: "#FF8B00" },
        { value: "yellow", label: "Yellow", color: "#FFC400" },
        { value: "green", label: "Green", color: "#36B37E" },
        { value: "forest", label: "Forest", color: "#00875A" },
        { value: "slate", label: "Slate", color: "#253858" },
        { value: "silver", label: "Silver", color: "#666666" }
    ];
    
    return (
        <>
            <Segment height={300}>
                <OptionBox
                    status={"normal"}
                    defaultValue={colourOptions[0]}
                    options={colourOptions}
                    menuPortalTarget={document.body}
                />
            </Segment>
        </>
    );
};

export const MultiSelected = () => {
    const colourOptions = [
        { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
        { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
        { value: "purple", label: "Purple", color: "#5243AA" },
        { value: "red", label: "Red", color: "#FF5630", isFixed: true },
        { value: "orange", label: "Orange", color: "#FF8B00" },
        { value: "yellow", label: "Yellow", color: "#FFC400" },
        { value: "green", label: "Green", color: "#36B37E" },
        { value: "forest", label: "Forest", color: "#00875A" },
        { value: "slate", label: "Slate", color: "#253858" },
        { value: "silver", label: "Silver", color: "#666666" }
    ];
    
    return (
        <>
            <Segment height={300}>
                <OptionBox
                    status={"normal"}
                    defaultValue={colourOptions[0]}
                    options={colourOptions}
                    isClearable
                    isMulti
                />
            </Segment>
        </>
    );
};
