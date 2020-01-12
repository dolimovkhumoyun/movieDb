import React from "react";
import Form from "@bit/dolimovkhumoyun.form_test.form";
const LoginForm = props => {
  const data = [
    {
      name: "username",
      type: "input",
      placeholder: "Username",
      message: "Please input your username!"
      // initialValue: "admin"
    },
    {
      name: "password",
      type: "input",
      placeholder: "Password",
      message: "Please input your password!"
      // initialValue: "admin"
    },
    {
      name: "button",
      type: "button",
      placeholder: "Sign in"
    }
  ];

  return <Form data={data} handleSubmit={props.onLogin} />;
};

export default LoginForm;
