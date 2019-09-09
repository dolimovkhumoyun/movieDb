import React, { Component } from "react";

import { Input } from "antd";

class SearchBar extends Component {
  render() {
    const { Search } = Input;

    return (
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        allowClear
      />
    );
  }
}

export default SearchBar;
