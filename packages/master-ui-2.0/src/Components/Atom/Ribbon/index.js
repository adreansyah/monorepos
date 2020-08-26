import React from "react"
import styled from "styled-components"
import {Icon} from "../index"

const Container = styled.div`
    display: flex;
    padding: 12px 16px;
    align-items: flex-start;
    background-color: ${props => {
        switch (props.type) {
            case "success": return props.theme.color.green30;
            case "warning" : return props.theme.color.orange30;
            case "error" : return props.theme.color.red30;
            default : return props.theme.color.red30;
        }
    }};
`
const IconWrapper = styled.div`
    display: flex;
    flex-shrink: 1;
    margin-right: 8px;
`
const ContentWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.color.white};
    justify-content: flex-start;
`

const Ribbon = props => {
    const { type } = props
    let iconName = ""
    switch (type) {
        case "success" : iconName = "information"; break;
        case "warning" : iconName = "time"; break;
        case "error" : iconName = "attention"; break;
        default : iconName = "attention"; break;
    }
    return (
        <Container {...props}>
            <IconWrapper>
                <Icon name={iconName} size={16} fillColor="white" />
            </IconWrapper>
            <ContentWrapper>
                <span>{props.children}</span>
            </ContentWrapper>
        </Container>
    )
}

export default Ribbon