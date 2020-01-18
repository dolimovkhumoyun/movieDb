import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { Card, Row, Col, Tabs, Typography } from "antd";

import "./index.scss";
import google from "../../assets/img/google.svg";
import facebook from "../../assets/img/facebook.svg";

import { connect } from "react-redux";
import axios from "axios";
import { setUser } from "../../redux/actions";

class Login extends Component {
  state = {};

  onLogin = async (e, formData) => {
    e.preventDefault();
    let profileData = formData.getFieldsValue();
    const response = await axios.post("http://localhost:8080/users/", profileData);
    this.handleUserResponse(response);
  };

  responseGoogle = async g_response => {
    let profileData = g_response.profileObj;
    const response = await axios.post("http://localhost:8080/users/google", profileData);
    this.handleUserResponse(response);
  };

  handleUserResponse = ({ status, data }) => {
    if (status === 200) {
      localStorage.setItem("token", data.token);
      this.props.setUser(data.user);
      this.props.history.push("/");
    } else {
      console.log(data);
    }
  };

  responseFacebook = response => {
    console.log("Repsone");
    console.log(response);
  };

  render() {
    const { TabPane } = Tabs;
    const { Title } = Typography;

    return (
      <Row>
        <Col span={8} offset={8} style={{ marginTop: 150 }}>
          <Card>
            <Col offset={5} span={13}>
              <Tabs tabBarGutter={165}>
                <TabPane tab={<span>Sign in</span>} key="1">
                  <LoginForm onLogin={this.onLogin} />
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
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
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
                        callback={this.responseFacebook}
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
                  <RegisterForm onLogin={this.onLogin} />
                </TabPane>
              </Tabs>
            </Col>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: userData => dispatch(setUser(userData))
});

export default connect(null, mapDispatchToProps)(Login);
