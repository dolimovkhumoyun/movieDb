import React from "react";
import Form from "@bit/dolimovkhumoyun.form_test.form";

const RegisterForm = props => {
  const data = [
    {
      name: "name",
      type: "input",
      placeholder: "Name",
      message: "Please input your Name!"
      //   initialValue: "admin"
    },
    {
      name: "username",
      type: "input",
      placeholder: "Username",
      message: "Please input your username!"
      //   initialValue: "admin"
    },
    {
      name: "password",
      type: "input",
      placeholder: "Password",
      message: "Please input your password!"
      //   initialValue: "admin"
    },

    {
      name: "button",
      type: "button",
      placeholder: "Register"
    }
  ];

  return <Form data={data} handleSubmit={props.onLogin} />;
};

export default RegisterForm;
