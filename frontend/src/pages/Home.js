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
                  <h1 className="cover-heading">Découvrez dès maintenant les associations d'Epitech.</h1>
                  <p className="lead">Envie d'agir sur une cause qui vous tient à coeur ? Profitez d'une liste de toutes les associations référencées à Epitech ainsi que leurs buts et le moyen de pouvoir rejoindre.</p>
                  <p className="lead">
                      <a href="/organizations" className="btn btn-lg btn-secondary">Voir la liste</a>
                      <br></br>
                      <br></br>
                      <a href="/register" className="btn btn-lg btn-dark">Référencer mon association</a>
                  </p>
              </main>
          </div>
      </>
    );
  }
}

export default Home;