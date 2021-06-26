import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Organizations from "../pages/Organizations";
import OrganizationDesc from "../pages/OrganizationDesc";
import OrganizationDescZone from "../components/OrganizationDescZone";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AdminHome from "../pages/admin/Home";
import SubHeader from "../components/sub-header";
import PrivateRoute from "../components/PrivateRoute";

console.log(
    "[NAVIGATION] - Current login status ==> ",
    localStorage.getItem("logged")
);
let login_status = localStorage.getItem("logged");
const handleLogout = () => {
  localStorage.clear();
  window.location.replace("/");
};
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
            {login_status ? (
                <ul className="nav navbar-nav mr-auto" style={{ margin: "auto" }}>
                  <li>
                    <Link to={"/admin"} className="nav-link">
                      {" "}
                      Admin{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" onClick={handleLogout}>
                      {" "}
                      Logout{" "}
                    </Link>
                  </li>
                </ul>
            ) : (
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
            )}
          </span>
          </nav>
          <SubHeader />
          {/* <hr /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/organizations" component={Organizations} />
            <Route
                path="/organization/:id"
                component={OrganizationDescZone}
                render={(props) => <OrganizationDescZone {...props} />}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/admin" component={AdminHome} />
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
