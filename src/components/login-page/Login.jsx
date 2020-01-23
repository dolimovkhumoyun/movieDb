import React from "react";
import axios from "axios";
import { Card, Row, Col } from "antd";

import "./index.scss";

import CustomTab from "../common/CustomTab";

const Login = props => {
  const onLogin = async (e, formData) => {
    e.preventDefault();
    let profileData = formData.getFieldsValue();
    const response = await axios.post("https://dolimovs.studio:8080/users/", profileData);
    handleUserResponse(response);
  };

  const responseGoogle = async g_response => {
    let profileData = g_response.profileObj;
    const response = await axios.post("https://dolimovs.studio:8080/users/google", profileData);
    handleUserResponse(response);
  };

  const handleUserResponse = ({ status, data }) => {
    if (status === 200) {
      localStorage.setItem("token", data.token);
      props.history.push("/");
    } else {
      console.log(data);
    }
  };
  const responseFacebook = response => {
    console.log("Repsone");
    console.log(response);
  };

  return (
    <Row>
      <Col span={8} offset={8} style={{ marginTop: 150 }}>
        <Card>
          <Col offset={5} span={13}>
            <CustomTab
              onLogin={onLogin}
              responseGoogle={responseGoogle}
              responseFacebook={responseFacebook}
            />
          </Col>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
