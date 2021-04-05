import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Keranjang from "./components/Keranjang";
import Produk from "./components/Produk";

class App extends Component {
  Navbar() {
    return (
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
              🍚 Toko Rice Cooker
            </Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/produk">
                    List Produk
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/keranjang">
                    Keranjang
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }

  render() {
    return (
      <Router>
        <div className="col-12">
          {this.Navbar()}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/produk">
              <Produk />
            </Route>
            <Route path="/keranjang">
              <Keranjang />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
