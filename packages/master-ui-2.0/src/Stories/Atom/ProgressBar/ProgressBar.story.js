import React from "react";
import { text } from "@storybook/addon-knobs";
import { ProgressBar } from "../../../Components/Atom";
import mdx from "./ProgressBar.mdx";


//Sharing Knobs
const knobsProgressBarContent = () => text("Content", "90%", "ProgressBar");
const knobsProgressBarLineWidth = () => text("Line Width", "300px", "ProgressBar");

export default {
    title: "Atom/Progress Bar",
    component: ProgressBar,
    parameters: {
        docs: {
            page: mdx
        }
    }
};

export const Default = () => {
    return <ProgressBar linewidth={knobsProgressBarLineWidth()} meter={'primary'} meterwidth={knobsProgressBarContent()}/>;
};