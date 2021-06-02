import React, { useState, Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function RegisterZone(props) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    password: "",
    //confirmPassword: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const pushDataToBackend = () => {
    if (state.email.length && state.password.length) {
      props.showError(null);
      const payload = {
        email: state.email,
        password: state.password,
      };
      axios
        .post("127.0.0.1:2442" + "/register", payload)
        .then(function (response) {
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage:
                "Your Epinaute account has been created, redirecting you to the homepage of the website",
            }));
            localStorage.setItem("token_there", response.data.token);
            redirectToHome();
            props.showError(null);
          } else {
            alert("An error occured");
            props.showError("An error occured");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      props.showError("Please enter valid username and/or password");
    }
  };
  const redirectToHome = () => {
    props.updateTitle("Epinaute - Home");
    props.history.push("/");
  };
  const redirectToLogin = () => {
    props.updateTitle("Epinaute - Login");
    props.history.push("/login");
  };
  const submitLastCheck = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      pushDataToBackend();
    } else {
      props.showError("Your passwords are differents, please check them");
    }
  };
  return (
    <>
      <div className="text-center">
        <h2>Register to Epinaute</h2>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 m-auto">
          <form>
            <div className="form-group">
              <label htmlFor="text">First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                id="firstName"
                aria-describedby="firstNameHelp"
                placeholder="Enter your First Name"
                value={state.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="text">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                id="lastName"
                aria-describedby="lastNameHelp"
                placeholder="Enter your Last Name"
                value={state.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="text">Epitech's Organization name</label>
              <input
                type="text"
                name="organization"
                className="form-control"
                id="organization"
                aria-describedby="organizationHelp"
                placeholder="Enter the name of your Epitech's organization"
                value={state.organization}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={state.email}
                onChange={handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
            {/* <div className="form-group">
                  <label htmlFor="confirmpassword">Password</label>
                  <input
                    type="password"
                    name="password2"
                    className="form-control"
                    id="confirmpassword"
                    placeholder="Password Again"
                    value={state.confirmPassword}
                    onChange={handleChange}
                  />
                </div> */}
            {/* <div className="form-check">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="form-check-input"
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    I accept terms and conditions
                  </label>
                </div> */}
            <button type="submit" className="btn btn-primary float-right">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterZone;