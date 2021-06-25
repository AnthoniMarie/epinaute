import React, { Component } from "react";
import OrganizationsListZone from "../components/OrganizationsListZone";

class Organizations extends Component {
  render() {
    const PageDesc = "Organizations referenced on Epinaute";
    return (
      <>
        <OrganizationsListZone/>
      </>
    );
  }
}

export default Organizations;