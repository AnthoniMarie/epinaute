import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import LoginZone from "../components/LoginZone";

class Login extends Component {
  render() {
    const PageDesc = "Login into your account";
    return (
      <>
        <LoginZone></LoginZone>
      </>
    );
  }
}

export default Login;