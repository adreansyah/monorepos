import React from 'react';
import styled, { css } from "styled-components";
import Segment from "../Segment";
import Text from "../Text";

const Wrapper = styled(Segment)`
    margin: 0 auto;
`;
const Bar = styled(Segment)`
    background-color: #DCDEE3;
    border-radius: 4px;
`;
const Meter = styled(Segment)`
    height: 4px;
    border-radius: ${props => props.meterwidth === '100%' ? '4px' : '4px 0 0 4px'};
`;
const Label = styled(Text)`
    text-align: left;
    margin-top: 5px;
    ${props => props.meterwidth === '100%' && css`
        margin-left: calc(${props => props.meterwidth} - 40px);
    `}
    ${props => props.meterwidth !== '100%' && css`
        margin-left: calc(${props => props.meterwidth} - 20px);
    `}
    ${props => props.meterwidth < '10%' && css`
        margin-left: calc(${props => props.meterwidth});
    `}
    
`;
const ProgressBar = (props) => {
    return (
        <Wrapper width={props.linewidth}>
            <Bar>
                <Meter bg={props.meter} width={props.meterwidth}></Meter>
            </Bar>
            <Label {...props}>{props.meterwidth}</Label>
        </Wrapper>
    )
}

export default ProgressBar;