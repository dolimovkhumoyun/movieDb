import React from "react";
import ContentLoader from "react-content-loader";
import { Card, Row, Col } from "antd";

const Skeleton = () => {
  const tmp = [1, 2, 3, 4];
  return (
    <Row gutter={[16, 16]}>
      {tmp.map(i => (
        <Col span={6} key={i}>
          <Card>
            <ContentLoader height={278} speed={2} primaryColor="#f3f3f3" secondaryColor="#ecebeb">
              <circle cx="510" cy="186" r="30" />
              <rect x="548" y="543" rx="4" ry="4" width="100" height="13" />
              <rect x="25" y="33" rx="5" ry="5" width="176" height="284" />
              <rect x="222" y="36" rx="0" ry="0" width="160" height="22" />
              <rect x="224" y="80" rx="0" ry="0" width="154" height="26" />
              <rect x="225" y="141" rx="0" ry="0" width="148" height="33" />
              <rect x="334" y="149" rx="0" ry="0" width="13" height="2" />
              <rect x="333" y="149" rx="0" ry="0" width="1" height="0" />
              <rect x="247" y="148" rx="0" ry="0" width="4" height="0" />
              <rect x="227" y="202" rx="0" ry="0" width="148" height="36" />
              <rect x="142" y="443" rx="0" ry="0" width="0" height="1" />
            </ContentLoader>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Skeleton;
