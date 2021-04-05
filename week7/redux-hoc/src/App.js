import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import GenericContainerDemo from "./GenericContainer/GenericContainerDemo";
import CustomFormDemo from "./CustomForm/CustomFormDemo";
import LoadDemo from "./LoadDemo/LoaderDemo";
import ProtectedRoutesDemo from "./ProtectedRoutes/RequireAuthDemo";
import RefsDemo from "./RefsDemo/RefsDemo";
import { AwesomeButton } from "react-awesome-button";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            💠 React Redux HOC
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/generic-container">
                  Generic Container
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/custom-form">
                  Custom Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/load-demo">
                  Load Demo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/protected-routes">
                  Protected Routes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/refs-demo">
                  Refs Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/generic-container">
            <GenericContainerDemo />
          </Route>
          <Route path="/custom-form">
            <CustomFormDemo />
          </Route>
          <Route path="/load-demo">
            <LoadDemo />
          </Route>
          <Route path="/protected-routes">
            <ProtectedRoutesDemo />
          </Route>
          <Route path="/refs-demo">
            <RefsDemo />
          </Route>
        </Switch>
        <footer className="page-footer font-small blue"></footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h3 className="my-3 mx-3">This is the home page 😉</h3>
      <Link className="nav-link" to="/generic-container">
        <AwesomeButton type="secondary">▶ Get Started</AwesomeButton>
      </Link>
    </div>
  );
}

export default App;
