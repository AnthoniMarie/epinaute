import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Contact extends Component {
  render() {
    const PageDesc = "Get in touch with us";
    return (
      <>
        <div className="text-center">
          <h2>Get in touch with us</h2>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Please type your message"
                />
              </Form.Group>
              <Form.Group controlId="agree_marketing">
                <Form.Check
                  type="checkbox"
                  label="I agree that Epinaute will be able to contact me for Marketing purposes"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;