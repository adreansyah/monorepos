import React from "react";
import axios from "axios";
import {SearchInput, SearchIconContainer} from "./SearchInput";
import SearchResult from "./SearchResult";
import { Icon, TextfieldInput } from "../../Atom";

const dummySuggestionList = {
  keyword: {
    total: [651],
    data: [
      { title: "samsung" },
      { title: "samsung 60" },
      { title: "samsung 32" },
      { title: "samsung 24" },
      { title: "samsung 49" },
      { title: "samsung 58" },
      { title: "samsung e" },
      { title: "me731k samsung" },
      { title: "samsung e" },
      { title: "samsung e" }
    ]
  },
  category: {
    total: [10],
    data: [
      { lctgr_no: 359, lctgr_nm: "Mobile Phone" },
      { lctgr_no: 371, lctgr_nm: "Kamera & Video Kamera" },
      { lctgr_no: 390, lctgr_nm: "Tablet, Notebook & Desktop" },
      { lctgr_no: 527, lctgr_nm: "Otomotif" },
      { lctgr_no: 439, lctgr_nm: "Peralatan Rumah" }
    ]
  },
  brand: {
    total: [4],
    data: [
      { brand_cd: "2000807", brand_nm: "Samsung" },
      { brand_cd: "2003095", brand_nm: "Knit-span" },
      { brand_cd: "2018822", brand_nm: "elevenia" }
    ]
  },
  toko: { total: [0] }
};

class SearchBar extends React.Component {
  state = {
    isShowList: false,
    inputText: "",
    suggestionList: [],
    recentList:
      [
        { id: 101, label: "recent 1" },
        { id: 102, label: "recent 2" },
        { id: 103, label: "recent 3" },
        { id: 104, label: "recent 4" }
      ] || this.props.recent,
    typing: false,
    typingTimeout: 0
  };

  handleClickOutside = event => {
    this.setState({
      isShowList: false
    });
  };

  showList = () => {
    this.setState({
      isShowList: true
    });
  };

  handleSearch = e => {
    let choice = e.target.value;
    this.setState({
      isShowList: false,
      inputText: choice
    });
  };

  doSearch = () => {
    const searchInput = this.state.inputText;
    if (searchInput.length === 0) {
      this.setState({
        suggestionList: []
      });
    } else {
      const getSuggestion =
        "http://192.168.27.12/laravel/public/autosuggest/" + searchInput;
      axios
        .get(getSuggestion)
        .then(res => {
          this.setState({
            suggestionList: res.data
          });
        })
        .catch(error => {
          console.log(error.res);
          this.setState({
            suggestionList: dummySuggestionList
          });
        });
    }
  };

  handleChange = event => {
    const self = this;

    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }

    self.setState({
      inputText: event.target.value,
      typing: false,
      typingTimeout: setTimeout(function() {
        self.doSearch(self.state.inputText);
      }, 0)
    });
  };

  render() {
    const { isShowList, inputText, recentList, suggestionList } = this.state;

    return (
      <React.Fragment>
        {isShowList && (
          <SearchResult
            inputText={inputText}
            recentItems={recentList}
            suggestionItems={suggestionList}
          />
        )}
        <SearchInput className={isShowList ? "focus-open" : ""}>
          <TextfieldInput
            onFocus={() => this.showList()}
            onChange={event => this.handleChange(event)}
          />
          <SearchIconContainer>
            <Icon name={"search"} size={32} fillColor="white" />
          </SearchIconContainer>
        </SearchInput>
      </React.Fragment>
    );
  }
}

export default SearchBar;
