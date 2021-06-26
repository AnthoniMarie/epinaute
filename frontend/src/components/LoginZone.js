import React from "react";
import { Alert } from "react-bootstrap";

class LoginZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login_check: "" };
    this.state = { firstName: "" };
    this.state = { lastName: "" };
    this.state = { organization: "" };
    this.state = { email: "" };
    this.state = { password: "" };
    this.state = { token: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    let currentComponent = this;
    let status;
    fetch("http://127.0.0.1:2442/user/login", {
      method: "POST",
      //mode: 'no-cors',
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        organization: this.state.organization,
        email: this.state.email,
        password: this.state.password,
      }),
    })
        .then((response) => {
          status = response.status;
          if (status == 200) {
            localStorage.setItem("logged", true);
            currentComponent.setState({
              login_check: "logged",
            });
            window.location.replace("/");
          } else if (status == 401) {
            console.log("Incorrected password");
            currentComponent.setState({
              login_check: "login_error",
            });
          } else if (status == 400) alert("Veuillez remplir tous les champs.");
          else console.log("an error occured :(");
          console.log(status);
          return response.json();
        })
        .then((response) => {
          this.setState({ token: response.token });
          return response;
        });

    event.preventDefault();
  };

  render() {
    console.log("Auth Token => ", this.state.token);
    console.log(
        "[LOGINZONE] - Current login status ==> ",
        localStorage.getItem("logged")
    );
    let login_alert_box;
    if (this.state.login_check == "logged")
      login_alert_box = (
          <Alert variant="success">
            <Alert.Heading>Login successfully.</Alert.Heading>
            <p>Thank you !</p>
          </Alert>
      );
    else if (this.state.login_check == "login_error")
      login_alert_box = (
          <Alert variant="danger">
            <Alert.Heading>An error occured.</Alert.Heading>
            <p>Login failed :/</p>
          </Alert>
      );
    return (
        <>
          <div className="container">
            <div className="text-center">
              <h2>Login into your Epinaute account</h2>
              {login_alert_box}
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 m-auto">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.value}
                        name="email"
                        onChange={this.handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Email that you have used while registration.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={this.state.value}
                        name="password"
                        onChange={this.handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary float-right">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
    );
  }
}

export default LoginZone;