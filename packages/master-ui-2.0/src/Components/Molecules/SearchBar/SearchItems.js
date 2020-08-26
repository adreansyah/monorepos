import styled from "styled-components";

const SearchResultItemWrapper = styled.div`
  margin: 0 8px;
  display: flex;
  position: relative;

  &:first-child {
    margin: 12px 8px 0;
  }

  &:last-child {
    margin: 0 8px 12px;
  }

  &:only-child {
    margin: 0 8px;
  }
`;

const SearchResultMarks = styled.div`
  background: ${props => props.theme.color.white};
  flex: 1;

  > p {
    padding: 8px;
  }
`;

const SearchResultItem = styled.div`
  opacity: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  position: absolute;

  &:hover + ${SearchResultMarks} {
    background-color: ${props => props.theme.color.black20};
    border-radius: ${props => props.theme.border.radius};
  }
  /* &:checked + ${SearchResultMarks} {
    border-radius: ${props => props.theme.border.radius};
    background: ${props => props.theme.color.primary};
    border-color: ${props => props.theme.color.primary};
  } */
`;

export { SearchResultItemWrapper, SearchResultMarks, SearchResultItem };
