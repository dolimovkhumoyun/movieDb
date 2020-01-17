import React from "react";

import { Input } from "antd";

const SearchBar = ({ onSearch }) => {
  const { Search } = Input;

  return <Search placeholder="input search text" onSearch={onSearch} allowClear />;
};

export default SearchBar;
