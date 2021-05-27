import React, { Component } from "react";
import SubHeader from "../components/sub-header";
import { Card, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    const PageDesc = "Promote your organization";
    return (
      <>
        <div className="text-center">
          <h2>Home Epinaute :)</h2>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center"></div>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/dswcrbbwu/image/upload/v1621867352/epinaute.org/images/porsche-911-gt2-5795128_1920_tbswku.jpg"
            />
            <Card.Body>
              <Card.Title>Blog Title</Card.Title>
              <Card.Text>Hi Epitech.</Card.Text>
              <Button variant="primary">Read</Button>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default Home;