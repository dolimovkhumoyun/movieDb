import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={390}
      height={270}
      viewBox="0 0 500 360"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="26" y="42" rx="0" ry="0" width="169" height="220" />
      <rect x="227" y="43" rx="0" ry="0" width="160" height="22" />
      <rect x="228" y="144" rx="0" ry="0" width="162" height="30" />
      <rect x="227" y="230" rx="0" ry="0" width="167" height="31" />
      <rect x="227" y="79" rx="0" ry="0" width="164" height="25" />
    </ContentLoader>
  );
};

export default Skeleton;
