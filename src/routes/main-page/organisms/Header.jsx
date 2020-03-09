// React
import React, { Fragment } from "react";

// Custom
import Searchbar from "./../molecules/SearchBar";

// Third-party
import { Row, Col } from "antd";

const Header = () => {
  return (
    <Fragment>
      <Row>
        <Col span="6" offset="9">
          <Searchbar />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Header;
