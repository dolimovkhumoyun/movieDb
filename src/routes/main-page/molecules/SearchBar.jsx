import React from "react";
import { Input } from "antd";

const { Search } = Input;

const Searchbar = () => {
  return (
    <Search
      placeholder="type name of the movie"
      style={{ marginTop: 20 }}
      onSearch={value => console.log(value)}
    />
  );
};

export default Searchbar;
