import React from "react";
import LoginForm from "../login-page/LoginForm";
import RegisterForm from "../login-page/RegisterForm";
import { Row, Col, Tabs, Typography } from "antd";

import GoogleLogin from "react-google-login";
import google from "../../assets/img/google.svg";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import facebook from "../../assets/img/facebook.svg";

const CustomTab = ({ onLogin, responseGoogle, responseFacebook }) => {
  const { TabPane } = Tabs;
  const { Title } = Typography;
  return (
    <Tabs tabBarGutter={165}>
      <TabPane tab={<span>Sign in</span>} key="1">
        <LoginForm onLogin={onLogin} />
        <Col offset={6}>
          <Title type="secondary" level={4}>
            Quick access with
          </Title>
        </Col>
        <br />
        <Row>
          <Col span={8} offset={4}>
            <GoogleLogin
              clientId="284653485315-5gi0g4ss8950l2o5u34kn75ikptmrvub.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              render={renderProps => (
                <img
                  src={google}
                  className="signin-buttons"
                  onClick={renderProps.onClick}
                  alt="google logo"
                />
              )}
            />
          </Col>
          <Col span={8} offset={4}>
            <FacebookLogin
              appId="782292608859808"
              callback={responseFacebook}
              render={renderProps => (
                <img
                  src={facebook}
                  className="signin-buttons"
                  onClick={renderProps.onClick}
                  alt="facebook logo"
                />
              )}
            />
          </Col>
        </Row>
      </TabPane>
      <TabPane tab={<span>Sign up</span>} key="2">
        <RegisterForm onLogin={onLogin} />
      </TabPane>
    </Tabs>
  );
};

export default CustomTab;
