import React from "react";
import { Input } from "antd";

const { Search } = Input;

const Searchbar = ({ onClick }) => {
  return (
    <Search
      placeholder="type name of the movie"
      style={{ marginTop: 20 }}
      onSearch={onClick}
    />
  );
};

export default Searchbar;
