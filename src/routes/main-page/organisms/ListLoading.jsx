import React from "react";
import Skeleton from "./../molecules/Skeleton";

const ListLoading = () => {
  let tmp = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div className="row">
      {tmp.map(t => (
        <div className="col-md-4 mt-4" key={t}>
          {/* <div className="card shadow-sm"> */}
          <Skeleton />
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};

export default ListLoading;
