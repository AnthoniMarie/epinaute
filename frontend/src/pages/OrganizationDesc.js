import React, { Component } from "react";
import OrganizationDescZone from "../components/OrganizationDescZone";

class OrganizationDesc extends Component {
    render() {
        const PageDesc = "Organizations description";
        return (
            <>
                <OrganizationDescZone/>
            </>
        );
    }
}

export default OrganizationDesc;