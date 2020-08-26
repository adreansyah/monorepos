import React from 'react';
import styled from "styled-components";


const PaginationItemWrapper = styled.button`
  min-height: 40px;
  min-width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: ${props => (props.active ? props.theme.color.black20 : 'transparent')};
  color: ${props => (props.active ? props.theme.color.black60 : props.theme.color.black40)};
  cursor: pointer;
  &:hover {
    background-color: ${props => (props.active ? props.theme.color.black20 : 'transparent')};
    color: ${props => (props.active || props.dotted ? props.theme.color.black60 : props.theme.color.primary)};
    cursor: ${props => (props.active || props.dotted ? 'default' : 'pointer')};
  }
`;

const PaginationItem = ({value=null, ...props}) => {
  return value && (
    <PaginationItemWrapper
      {...props}
      onClick={props.dotted ? () => null : props.onClick}
    >
      {props.dotted ? '...' : value}
    </PaginationItemWrapper>
  )
}

export default PaginationItem;