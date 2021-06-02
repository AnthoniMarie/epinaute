import React, { useState, Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import RegisterZone from "../components/RegisterZone";

class Register extends Component {
  render() {
    const PageDesc = "Register to Epinaute";
    return (
      <>
        <RegisterZone></RegisterZone>
      </>
    );
  }
}

export default Register;