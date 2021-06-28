import React, { Component } from "react";
import SubHeader from "../components/sub-header";
import { Card, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    const PageDesc = "Promote your organization";
    return (
      <>
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column justify-content-center" style={{maxWidth: '54em'}}>
              <main role="main" className="inner cover">
                  <h1 className="cover-heading">Discover Epitech's organizations, now.</h1>
                  <p className="lead">Do you want to act on a cause that is close to your heart? Take advantage of a list of all organizations referenced at Epitech as well as their goals and the means of joining.</p>
                  <p className="lead">
                      <a href="/organizations" className="btn btn-lg btn-secondary">See the list</a>
                      <br></br>
                      <br></br>
                      <a href="/register" className="btn btn-lg btn-dark">I want to list my organization</a>
                  </p>
              </main>
          </div>
      </>
    );
  }
}

export default Home;