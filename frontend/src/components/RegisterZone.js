import React from "react";
import { Alert } from "react-bootstrap";
class RegisterZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSuccessAlert: false };
    this.state = { showAlreadyExistAlert: false };
    this.state = { firstName: "" };
    this.state = { lastName: "" };
    this.state = { organization: "" };
    this.state = { email: "" };
    this.state = { password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    let currentComponent = this;

    fetch("http://epinaute.org:2442/user/register", {
      method: "POST",
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
    }).then(function (response) {
      if (response.status == 200) {
        currentComponent.setState({
          showSuccessAlert: true,
        });
        return response.json();
      }
      else if (response.status == 409) {
        console.log("the user is already in our database");
        currentComponent.setState({
          showAlreadyExistAlert: true,
        });
      }
      else if (response.status == 400)
        alert("Veuillez remplir tous les champs.");
      else console.log("an error occured :(");
    });

    event.preventDefault();
  };

  render() {
    return (
      <>
      <div className="container">
        <div className="text-center">
          <h2>Register to Epinaute</h2>
          {this.state.showSuccessAlert && (
          <Alert variant="success">
            <Alert.Heading>Registered successfully.</Alert.Heading>
            <p>Thank you ! You registreation has been approved and complete :)</p>
          </Alert>
        )}

          {this.state.showAlreadyExistAlert && (
          <Alert variant="danger">
            <Alert.Heading>An error occured.</Alert.Heading>
            <p>This user is already registered in our database :/</p>
          </Alert>
        )}
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 m-auto">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="text">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.value}
                  name="firstName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="text">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.value}
                  name="lastName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="text">Epitech's Organization name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.value}
                  name="organization"
                  onChange={this.handleChange}
                />
              </div>
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
                  We'll never share your email with anyone else.
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
                Register
              </button>
            </form>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default RegisterZone;