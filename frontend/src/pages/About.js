import React, { Component } from "react";

class About extends Component {
  render() {
    const PageDesc = "History about Epinaute";
    return (
      <>
        <div className="text-center">
          <h2>About us</h2>
        </div>
        <div>
          <section id="About" className="content-section">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-12">
                  <p className="lead">Who are behind Epinaute ?</p>
                </div>
              </div>
            </div>
          </section>
          <div className="row justify-content-md-center text-center">
            <div className="col-lg-4">
              <img
                className="rounded mx-auto d-block"
                src="https://res.cloudinary.com/dswcrbbwu/image/upload/v1621865487/epinaute.org/images/anthonimarie_wfnmle_zr6awk_tm8ugc.jpg"
                alt="Anthoni Marie"
                width="150"
                height="150"
                style={{ borderRadius: "5%", width: "unset" }}
              />
              <h2>Anthoni Marie</h2>
              <p>
                Passionné d'automobile et informatique depuis mon enfance, ce
                projet me tient particulièrement à coeur !
              </p>
              <p>
                <a
                  className="btn btn-secondary"
                  href="https://anthoni-marie.fr"
                  role="button"
                >
                  En savoir plus
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="rounded mx-auto d-block"
                src="https://res.cloudinary.com/dswcrbbwu/image/upload/v1621865566/epinaute.org/images/25481821_fax9d2.jpg"
                alt="Brice Toffolon"
                width="150"
                height="150"
                style={{ borderRadius: "5%", width: "unset" }}
              />
              <h2>Lorenzo Carneli</h2>
              <p>Lorem ipsum dolor sit a méthamphétamine.</p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  En savoir plus
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;