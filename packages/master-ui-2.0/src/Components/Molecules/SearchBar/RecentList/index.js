import React from "react";
import { SearchResultItemWrapper, SearchResultItem, SearchResultMarks } from "../SearchItems";

const RecentList = recentItems => {
    return recentItems.map(item => {
      return (
        <SearchResultItemWrapper key={item.id}>
          <SearchResultItem />
          <SearchResultMarks>
            <p>{item.label}</p>
          </SearchResultMarks>
        </SearchResultItemWrapper>
      );
    });
  };

export default RecentList;