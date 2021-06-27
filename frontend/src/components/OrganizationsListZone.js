import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

class OrganizationsListZone extends React.Component {
    constructor() {
        super();
        this.state = { orga_items: [] };
    }

    componentDidMount() {
        let orga_items = [];

        fetch("http://127.0.0.1:2442/org/all", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ orga_items: data.orgs });
            });
    }
    render() {
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
                                    {this.state.orga_items
                                        ? this.state.orga_items.map((orga_item) => {
                                            return (
                                                <tr>
                                                    <td className="p-name">
                                                        <Link
                                                            to={{
                                                                pathname: "/organization/" + orga_item._id,
                                                                data: orga_item,
                                                            }}
                                                        >
                                                            {orga_item.name}
                                                        </Link>{" "}
                                                        <br />
                                                        <small>Posted on x</small>
                                                    </td>
                                                    <td className="p-description">
                                                        <p className="text">{orga_item.description}</p>
                                                    </td>
                                                    <td>
                                <span className="label label-default">
                                  {orga_item.location}
                                </span>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to={{
                                                                pathname: "/organization/" + orga_item._id,
                                                                data: orga_item,
                                                            }}
                                                            className="btn btn-light btn-xs"
                                                        >
                                                            <i
                                                                aria-hidden="true"
                                                                className="fa fa-folder"
                                                            />{" "}
                                                            Découvrir
                                                        </Link>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                        : null}
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

export default OrganizationsListZone;