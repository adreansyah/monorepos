import React from "react";
import {
  SearchResultItemWrapper,
  SearchResultItem,
  SearchResultMarks
} from "../SearchItems";

const keywordItem = (item, idx) => {
  return (
    <SearchResultItemWrapper key={idx}>
      <SearchResultItem />
      <SearchResultMarks>
        <p>{item.title}</p>
      </SearchResultMarks>
    </SearchResultItemWrapper>
  );
};

const categoryItem = (item, idx, inputText) => {
  return (
    <SearchResultItemWrapper key={idx}>
      <SearchResultItem />
      <SearchResultMarks>
        <p>
          {inputText} di {item.lctgr_nm}
        </p>
      </SearchResultMarks>
    </SearchResultItemWrapper>
  );
};

// const brandItem = (item, idx, inputText) => {
//   return (
//     <SearchResultItemWrapper key={idx}>
//       <SearchResultItem />
//       <SearchResultMarks>
//         <p>
//           {inputText} di {item.brand_nm}
//         </p>
//       </SearchResultMarks>
//     </SearchResultItemWrapper>
//   );
// };

// const tokoItem = (item, idx, inputText) => {
//   return (
//     <SearchResultItemWrapper key={idx}>
//       <SearchResultItem />
//       <SearchResultMarks>
//         <p>
//           {inputText} di {item.toko_nm}
//         </p>
//       </SearchResultMarks>
//     </SearchResultItemWrapper>
//   );
// };

const SuggestionList = (inputText, suggestionItems) => {
  const keywords = suggestionItems["keyword"];
  const category = suggestionItems["category"];
  const brand = suggestionItems["brand"];
  const toko = suggestionItems["toko"];
  console.log(suggestionItems);
  return (
    <>
      {keywords.total[0] !== 0 ||
      category.total[0] !== 0 ||
      brand.total[0] !== 0 ||
      toko.total[0] !== 0 ? (
        <React.Fragment>
          {category.total[0] !== 0 && category.data.map((item, idx) => categoryItem(item, idx, inputText))}
          {keywords.total[0] !== 0 && keywords.data.map((item, idx) => keywordItem(item, idx))}
          {/* {brand.total[0] !== 0 && brand.data.map((item, idx) => brandItem(item, idx, inputText))} */}
          {/* {toko.total[0] !== 0 && toko.data.map((item, idx) => tokoItem(item, idx, inputText))} */}
        </React.Fragment>
      ) : (
        <SearchResultItemWrapper>
          <SearchResultItem />
          <SearchResultMarks>
            <p>Hasil pencarian tidak ditemukan</p>
          </SearchResultMarks>
        </SearchResultItemWrapper>
      )}
    </>
  );
};

export default SuggestionList;
