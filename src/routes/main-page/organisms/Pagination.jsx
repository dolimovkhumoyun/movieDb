import React from "react";
import { Pagination } from "antd";

const Paging = () => {
  return (
    <div className="mt-4 mb-4" style={{ textAlign: "center" }}>
      <Pagination defaultCurrent={6} total={500} />
    </div>
  );
};

export default Paging;
