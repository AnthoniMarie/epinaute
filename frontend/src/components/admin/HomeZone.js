import React, { Component } from "react";

class HomeZone extends Component {
    constructor() {
        super();
        this.state = { organization: [] };
    }

    componentDidMount() {
        let organization = "";

        fetch("http://127.0.0.1:2442/user/me", {
            method: "GET",
            headers: {
                Authorization: 'Basic '+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDQ5NDE0ZjFhZTljMDAxOWJjNmViMyIsImVtYWlsIjoiY29udGFjdEBhbnRob25pLW1hcmllLmZyIiwib3JnYW5pemF0aW9uIjoiQW50aG9uaSBDb3Jwb3JhdGlvbiIsImlhdCI6MTYyNDY4NjQ5OH0.kEZ2QPT3WI6Vsx_YNaS6r8wEdqMs9WV-Izj564FPtms",
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ organization: data.user.organization });
            });
    }

    render() {
        const PageDesc = "Organizations description";
        console.log("organization " + this.state.organization);
        return (
            <>
                <div className="text-center">
                    <h2>Admin Epinaute :)</h2>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-center"/>
                    <br/>
                    <h3>Gestion de mon assocation</h3>
                    <hr/>
                    <div className="text-center">
                        <h2>{this.state.organization}</h2>
                    </div>
                    <hr/>
                </div>
                //todo: Récupérer jwt token dynamiquement, récupérer la desc par id d'orga
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <div className="form-group">
                                <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="10">
                                    contenu desc
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HomeZone;