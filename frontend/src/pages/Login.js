import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Login extends Component {
  render() {
    const PageDesc = "Login into your account";
    return (
      <>
        <div className="text-center">
          <h2>Login into your Epinaute account</h2>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 m-auto">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Email that you have used while registration.
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
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <label className="form-check-label" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Login
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;