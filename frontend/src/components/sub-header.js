import React, { Component } from "react";
import "./base.css";

import { Button } from "react-bootstrap";

export default ({ children }) => (
  <>
    <div
      className="Component-Bg text-center"
      style={{
        width: "100%",
        height: 307,
        backgroundImage: `url('https://res.cloudinary.com/dswcrbbwu/image/upload/v1621589779/epinaute.org/images/people-2567915_1920_d0oice.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "35px",
          lineHeight: 6.5,
          paddingTop: 0,
          marginTop: 0,
          color: "white",
        }}
      >
        Epinaute.org
      </h1>
      <Button
        variant="warning"
        style={{
          justifyContent: "center",
          marginTop: "-190px",
          color: "#FFFFFF",
        }}
      >
        Join now
      </Button>{" "}
    </div>
    <br/>
    <div style={{ maxWidth: 1180, margin: "0 auto" }}>{children}</div>
  </>
);