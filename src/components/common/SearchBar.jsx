import React from "react";

import { Input } from "antd";

const SearchBar = ({ onSearch }) => {
  const { Search } = Input;

  return <Search placeholder="Type name of the Movie" onSearch={onSearch} allowClear />;
};

export default SearchBar;
