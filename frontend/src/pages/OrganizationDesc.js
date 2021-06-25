import React, { Component } from "react";

class OrganizationDesc extends Component {
    render() {
        const PageDesc = "Organizations referenced on Epinaute";
        const { data } = this.props.location;
        return (
            <>
                <div className="text-center">
                    <h2>{data.name}</h2>
                </div>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <p className="text">{data.description}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default OrganizationDesc;