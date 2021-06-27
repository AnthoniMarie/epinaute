import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
        .sendForm(
            process.env.EMAILJS_SERVICEID,
            process.env.EMAILJS_TEMPLATEID,
            e.target,
            process.env.EMAILJS_USERID
        )
        .then(
            (result) => {
              alert("Message envoyé avec succès !");
            },
            (error) => {
              alert("Une erreur est survenue, veuillez réessayer.");
            }
        );
  }

  return (
      <>
        <div className="text-center">
          <h2>Get in touch with us</h2>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form onSubmit={sendEmail}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                />
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
                    name="message"
                />
              </Form.Group>
              {/*<Form.Group controlId="agree_marketing">
                <Form.Check
                  type="checkbox"
                  label="I agree that Epinaute will be able to contact me for Marketing purposes"
                />
              </Form.Group>*/}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </>
  );
}