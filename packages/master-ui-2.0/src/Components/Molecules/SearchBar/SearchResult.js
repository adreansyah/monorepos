import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import RecentList from "./RecentList";
import SuggestionList from "./SuggestionList";

const SearchResultWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 0px;
  top: 48px;
  z-index: 20;
`;

const SearchResultContainer = styled.div`
  position: absolute;
  border: 1px solid ${props => props.theme.color.orange30};
  border-radius: ${props => props.theme.border.radius};
  background-color: white;
  width: 100%;
`;

const SearchResult = ({
  inputText,
  recentItems,
  suggestionItems,
  selected,
  onClickOption,
  ...optionProps
}) => {
  return (
    <SearchResultWrapper>
      <SearchResultContainer>
        {suggestionItems.length === 0
          ? RecentList(recentItems)
          : SuggestionList(inputText, suggestionItems)}
      </SearchResultContainer>
    </SearchResultWrapper>
  );
};

//Default Props
SearchResult.defaultProps = {
  status: "normal"
};

//Props Validation
SearchResult.propTypes = {
  optionProps: PropTypes.object,
  optionItems: PropTypes.object,
  onClickOption: PropTypes.func,
  selected: PropTypes.string
};

//Set Display Name
SearchResult.displayName = "SearchResult";
export default SearchResult;
