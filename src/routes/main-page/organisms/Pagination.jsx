import React from "react";
import { Pagination } from "antd";

const Paging = ({ data, onClick }) => {
  if (!data.isFetching) {
    const { page, total_pages } = data.response;

    return (
      <div className="mt-4 mb-4" style={{ textAlign: "center" }}>
        <Pagination
          defaultCurrent={page}
          total={total_pages * 10}
          onChange={onClick}
        />
      </div>
    );
  } else return false;
};

export default Paging;
