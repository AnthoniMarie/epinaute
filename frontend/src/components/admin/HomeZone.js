import React, { Component } from "react";
import { Alert } from "react-bootstrap";

class HomeZone extends Component {
    constructor(props) {
        super(props);
        this.state = { showSuccessAlert: false };
        this.state = { showDenyAlert: false };
        this.state = { name: "" };
        this.state = { location: "" };
        this.state = { description: "" };
        this.state = { email: "" };
        this.state = { org_me_data: [] };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        let currentComponent = this;
        let unique_id = localStorage.getItem("unique");

        fetch("http://epinaute.org:2442/org/edit", {
            method: "POST",
            headers: {
                Authorization: "Basic " + unique_id,
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.state.name,
                location: this.state.location,
                description: this.state.description,
                email: this.state.email,
            }),
        }).then(function (response) {
            if (response.status == 200) {
                currentComponent.setState({
                    showSuccessAlert: true,
                });
                return response.json();
            } else if (response.status == 401) {
                currentComponent.setState({
                    showDenyAlert: true,
                });
            } else if (response.status == 400)
                alert("Veuillez remplir tous les champs.");
            else console.log("an error occured :(");
        });

        event.preventDefault();
    };

    componentDidMount() {
        let unique_id = localStorage.getItem("unique");

        Promise.all([
            fetch("http://epinaute.org:2442/user/me", {
                method: "GET",
                headers: {
                    Authorization: "Basic " + unique_id,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }).then((res) => res.json()),
            fetch("http://epinaute.org:2442/org/me", {
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
                name: ResOrgMe.org.name,
                location: ResOrgMe.org.location,
                description: ResOrgMe.org.description,
                email: ResOrgMe.org.email,
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

                    {this.state.showSuccessAlert && (
                        <Alert variant="success">
                            <Alert.Heading>
                                Updated successfully. See <a href="/admin">there</a>
                            </Alert.Heading>
                        </Alert>
                    )}

                    {this.state.showDenyAlert && (
                        <Alert variant="danger">
                            <Alert.Heading>An error occured.</Alert.Heading>
                            <p>Please check what you entered, you can't change the name of your organization by youself, contact us :/</p>
                        </Alert>
                    )}
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
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="text">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.name}
                                        name="name"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="text">Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.location}
                                        name="location"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="text">Description</label>
                                    <textarea
                                        className="form-control rounded-0"
                                        id="exampleFormControlTextarea1"
                                        rows="10"
                                        value={this.state.description}
                                        name="description"
                                        onChange={this.handleChange}
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="text">E-mail</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.email}
                                        name="email"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary float-right">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HomeZone;