import React from "react";
import { Badge } from "../../../Components/Atom";
import mdx from './Badge.mdx';

export default {
    title: "Atom/Badge",
    component: Badge,
    parameters: {
        docs: {
            page: mdx,
        }
    }
};

export const Basic = () => {
    return (
        <>
            <Badge bg="primary">primary</Badge>
            <Badge bg="success">success</Badge>
            <Badge bg="error">error</Badge>
            <Badge bg="warning">warning</Badge>
            <Badge bg="info">info</Badge>
            <Badge bg="light">light</Badge>
        </>
    );
};

export const Round = () => {
    return (
        <>
            {/* you can custom radius number using string */}
            <Badge bg="primary" round="20%">
                primary
            </Badge>
            <Badge bg="success" round={50}>
                success
            </Badge>
            <Badge bg="error" round={20}>
                error
            </Badge>
            <Badge bg="warning" round={10}>
                warning
            </Badge>
            <Badge bg="info" round>
                info
            </Badge>
            <Badge bg="light">
                light
            </Badge>
        </>
    );
};


export const FontAttribute = () => {
    return (
        <>
            {/*you can use number or string*/}
            <Badge bg="primary" fontSize="4px" color="white" Bold>
                primary
            </Badge>
            <Badge bg="success" fontSize="8px" color="white" Bold>
                success
            </Badge>
            <Badge bg="error" fontSize="12px" color="white" Bold>
                error
            </Badge>
            <Badge bg="warning" fontSize={16} color="yellow" Bold>
                warning
            </Badge>
            <Badge bg="black10" fontSize={20} color="red" Bold>
                info
            </Badge>
            <Badge bg="light" fontSize={24} color="black" Bold>
                light
            </Badge>
        </>
    );
};