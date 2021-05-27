import React, { Component } from "react";

class Organizations extends Component {
  render() {
    const PageDesc = "Organizations referenced on Epinaute";
    return (
      <>
        <div className="text-center">
          <h2>Organizations list</h2>
        </div>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className="table-responsive">
                <table className="table" style={{ fontSize: "15px" }}>
                  <thead>
                    <tr>
                      <th>Nom de l'association</th>
                      <th>Description</th>
                      <th>Etat</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-name">
                        <a
                          href={"/organization-example"}
                          data-project="display_projectname"
                        >
                          Junior Conseil Taker
                        </a>{" "}
                        <br />
                        <small>Posted on 01-05-2021</small>
                      </td>
                      <td className="p-description">
                        <p class="text">description...</p>
                      </td>
                      <td>
                        <span className="label label-default">Validée</span>
                      </td>
                      <td>
                        <a
                          href="{'/organization-example'}"
                          className="btn btn-light btn-xs"
                          style={{}}
                        >
                          <i aria-hidden="true" className="fa fa-folder"></i>{" "}
                          Découvrir
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Organizations;