import React, { Component } from "react";
import { Button } from "react-bootstrap";

class OrganizationDescZone extends Component {
    render() {
        const PageDesc = "Organizations description";
        const { data } = this.props.location;
        return (
            <>
                <div className="text-center">
                    <h2>{data.name}</h2>
                    <h5>Location: {data.location}</h5>
                    <h5>Manager E-mail: {data.email}</h5>
                </div>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <Button
                                href={
                                    "mailto:" +
                                    data.email +
                                    "?subject=I want to join your organization - Epinaute.org&body=Hello, how could I join your organization ? Thank you!"
                                }
                                variant="warning"
                                style={{
                                    justifyContent: "center",
                                    marginTop: "-190px",
                                    color: "#FFFFFF",
                                }}
                            >
                                I want to join
                            </Button>{" "}
                            <p className="text">{data.description}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default OrganizationDescZone;