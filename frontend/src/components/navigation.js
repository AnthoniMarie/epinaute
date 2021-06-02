import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Organizations from "../pages/Organizations";
import OrganizationDesc from "../pages/OrganizationDesc";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import SubHeader from "../components/sub-header";

export default () => (
  <>
    <Router>
      <>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
      </>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Epinaute
          </a>
          <ul className="nav navbar-nav mr-auto" style={{ margin: "auto" }}>
            <li>
              <Link to={"/"} className="nav-link">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to={"/organizations"} className="nav-link">
                {" "}
                Organizations{" "}
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="nav-link">
                {" "}
                About{" "}
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="nav-link">
                {" "}
                Contact{" "}
              </Link>
            </li>
          </ul>
          <span className="navbar-text actions">
          <ul className="nav navbar-nav mr-auto" style={{ margin: "auto" }}>
            <li>
              <Link to={"/register"} className="nav-link">
                {" "}
                Register{" "}
              </Link>
            </li>
            <li>
              <Link to={"/login"} className="nav-link">
                {" "}
                Login{" "}
              </Link>
            </li>
            </ul>
          </span>
        </nav>
        <SubHeader/>
        {/* <hr /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/organizations" component={Organizations} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/organization-example"
            component={OrganizationDesc}
          />
        </Switch>
      </div>
    </Router>
  </>
);