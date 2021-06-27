import React, { Component } from "react";

class HomeZone extends Component {
    constructor() {
        super();
        this.state = { org_me_data: [] };
    }

    componentDidMount() {
        let unique_id = localStorage.getItem("unique");

        Promise.all([
            fetch("http://127.0.0.1:2442/user/me", {
                method: "GET",
                headers: {
                    Authorization: "Basic " + unique_id,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }).then((res) => res.json()),
            fetch("http://127.0.0.1:2442/org/me", {
                method: "GET",
                headers: {
                    Authorization: "Basic " + unique_id,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }).then((res) => res.json()),
        ]).then(([resUserMe, ResOrgMe]) => {
            this.setState({
                org_me_data: ResOrgMe.org,
            });
        });
    }

    render() {
        const PageDesc = "Organizations description";
        return (
            <>
                <div className="container">
                    <div className="row d-flex justify-content-center" />
                    <br />
                    <h5>Gestion de mon assocation</h5>
                    <hr />
                    <div className="text-center">
                        <h2>{this.state.org_me_data.name}</h2>
                        <p>Location: {this.state.org_me_data.location}</p>
                        <p>Email: {this.state.org_me_data.email}</p>
                    </div>
                    <hr />
                </div>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <div className="form-group">
                <textarea
                    className="form-control rounded-0"
                    id="exampleFormControlTextarea1"
                    rows="10"
                    value={this.state.org_me_data.description}
                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HomeZone;