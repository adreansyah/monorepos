import styled from "styled-components";

const PaginationNav = styled.button`
  padding: 7.5px 9px;
  border: 1px solid ${props => props.theme.color.black30};
  border-radius: 4px;
  vertical-align: middle;
  background-color: '${props => props.theme.color.white}';
  cursor: pointer;
  &:hover {
    background-color ${props => props.theme.color.black20};
    path:last-child {
      fill: ${props => props.theme.color.primary}
    }
  }
  &:first-child {
    margin-right: 8px;
  }
  &:last-child {
    margin-left: 8px;
  }
`;

export default PaginationNav
