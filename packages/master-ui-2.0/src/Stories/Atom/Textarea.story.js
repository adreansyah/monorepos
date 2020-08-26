import React from "react";
import { Textarea, Icon } from "../../Components/Atom";

export default {
    title: "Atom/Textarea",
    component: Textarea
};

export const _0Default = () => {
    return (
        <Textarea
            inputProps={{
                placeholder: "Fill the field...",
                onChange: e => console.log(e.target.value),
                "data-validation": "require,email"
            }}
        />
    );
};

export const Line = () => {
    return (
        <Textarea
            model="line"
            inputProps={{
                placeholder: "Fill the field...",
                onChange: e => console.log(e.target.value),
                "data-validation": "require,email"
            }}
        />
    );
};

export const DefaultValue = () => {
    return (
        <Textarea
            inputProps={{
                placeholder: "Fill the field...",
                onChange: e => console.log(e.target.value),
                "data-validation": "require,email"
            }}
        />
    );
};

export const Status = () => {
    return (
        <>
            <label>Normal</label>
            <Textarea
                status={"normal"}
                inputProps={{
                    placeholder: "Fill the field...",
                    onChange: e => console.log(e.target.value),
                    "data-validation": "require,email"
                }}
            />
            
            <label>Success</label>
            <Textarea
                status={"success"}
                inputProps={{
                    placeholder: "Fill the field...",
                    onChange: e => console.log(e.target.value),
                    "data-validation": "require,email"
                }}
            />

            <label>Error</label>
            <Textarea
                status={"error"}
                inputProps={{
                    placeholder: "Fill the field...",
                    onChange: e => console.log(e.target.value),
                    "data-validation": "require,email"
                }}
            />
        </>
    );
};

export const RowsAndCols = () => {
    return (
        <Textarea
            inputProps={{
                rows: "5",
                placeholder: "Fill the field...",
                onChange: e => console.log(e.target.value),
                "data-validation": "require,email"
            }}
        />
    );
};

export const Resize = () => {
    return (
        <Textarea
            inputProps={{
                resize: "vertical",
                placeholder: "Fill the field...",
                onChange: e => console.log(e.target.value),
                "data-validation": "require,email"
            }}
        />
    );
};

export const Disabled = () => {
    return (
        <Textarea
            inputProps={{
                placeholder: "Fill the field...",
                onChange: e => console.log(e.target.value),
                "data-validation": "require,email"
            }}
            disabled
        />
    );
};
