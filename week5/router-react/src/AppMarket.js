import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import gili_grey from "./img/gili-grey.jpg";
import jimbaran_black from "./img/jimbaran-black.jpg";
import kuta_army from "./img/kuta-army.jpg";
import prau_black from "./img/prau-black.jpg";
import rainier_cream from "./img/rainier-cream.jpg";
import rinjani_green from "./img/rinjani-green.jpg";
import shoes_army from "./img/shoes-army.jpg";
import shoes_black from "./img/shoes-black.jpg";
import shoes_navy from "./img/shoes-navy.jpg";

export default function MarketplaceExample() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Tuf Shoes
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
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <AuthButton />
            </form>
          </div>
        </div>
      </nav>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <ShopRoute path="/shop">
            <ShopPage />
          </ShopRoute>
        </Switch>
        <footer className="page-footer font-small blue"></footer>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  return fakeAuth.isAuthenticated ? (
    <button
      className="btn btn-light"
      onClick={() => {
        fakeAuth.signout(() => history.push(from));
      }}
    >
      Log out
    </button>
  ) : (
    <span className="text-light">You are not logged in.</span>
  );
}

function ShopRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function HomePage() {
  return (
    <div className="container-fluid">
      <h3 className="my-3">This is the home page</h3>
      <Link className="nav-link" to="/shop">
        <button className="btn btn-dark">Go to shop</button>
      </Link>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="container-fluid">
      <h3 className="mt-3">Tuf Shoes is e-commerce platform in Bandung</h3>
      <h5 className="my-3">Original browser from here ⬇</h5>
      <a href="https://tufshoes.com/">tufshoes.com</a>
    </div>
  );
}

function ShopPage() {
  return (
    <Router>
      <div className="container">
        <h2 className="my-3">Welcome!</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/sandals-casual">Sandals Casual</Link>
          </li>
          <li className="list-group-item">
            <Link to="/sandals-travelling">Sandals Travelling</Link>
          </li>
          <li className="list-group-item">
            <Link to="/shoes">Shoes</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/sandals-casual">
            <SandalsCasual />
          </Route>
          <Route path="/sandals-travelling">
            <SandalsTravelling />
          </Route>
          <Route path="/shoes">
            <Shoe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <div className="container-fluid">
      <h3 className="my-3">
        You must log in to view the page at {from.pathname}
      </h3>
      <button className="btn btn-dark" onClick={login}>
        Log in
      </button>
    </div>
  );
}

function SandalsCasual() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2 className="my-3">Sandals Casual</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/JIMBARAN - BLACK, 43, Rp125.000`}
            >
              <div className="card-body text-center">
                <img
                  src={jimbaran_black}
                  alt="JIMBARAN - BLACK"
                  className="productimg mb-4"
                />
                <h5 className="card-title">JIMBARAN - BLACK</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/KUTA - ARMY, 42, Rp139.000`}
            >
              <div className="card-body text-center">
                <img
                  src={kuta_army}
                  alt="KUTA - ARMY"
                  className="productimg mb-4"
                />
                <h5 className="card-title">KUTA - ARMY</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/GILI - GREY, 41, Rp185.000`}
            >
              <div className="card-body text-center">
                <img
                  src={gili_grey}
                  alt="GILI - GREY"
                  className="productimg mb-4"
                />
                <h5 className="card-title">GILI - GREY</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <h4 className="text-center my-3">
            Choose a sandals image for details and prices!
          </h4>
        </Route>
        <Route path={`${path}/:productId`}>
          <SandalsCasuals />
        </Route>
      </Switch>
    </div>
  );
}

function SandalsCasuals() {
  let { productId } = useParams();
  return (
    <div>
      <h4 className="text-center my-3">{productId}</h4>
    </div>
  );
}

function SandalsTravelling() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2 className="my-3">Sandals Travelling</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/PRAU - BLACK, 41, Rp.225.000`}
            >
              <div className="card-body text-center">
                <img
                  src={prau_black}
                  alt="PRAU - BLACK"
                  className="productimg mb-4"
                />
                <h5 className="card-title">PRAU - BLACK</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/RINJANI - GREY GREEN, 43, Rp240.000`}
            >
              <div className="card-body text-center">
                <img
                  src={rinjani_green}
                  alt="RINJANI - GREY GREEN"
                  className="productimg mb-4"
                />
                <h5 className="card-title">RINJANI - GREY GREEN</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/RAINIER - WHITE BLACK CREAM, 42, Rp189.000`}
            >
              <div className="card-body text-center">
                <img
                  src={rainier_cream}
                  alt="RAINIER - WHITE BLACK CREAM"
                  className="productimg mb-4"
                />
                <h5 className="card-title">RAINIER - WHITE BLACK CREAM</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <h4 className="text-center my-3">
            Choose a sandals image for details and prices!
          </h4>
        </Route>
        <Route path={`${path}/:productId`}>
          <SandalsTravellings />
        </Route>
      </Switch>
    </div>
  );
}

function SandalsTravellings() {
  let { productId } = useParams();
  return (
    <div>
      <h4 className="text-center my-3">{productId}</h4>
    </div>
  );
}

function Shoe() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2 className="my-3">Shoes</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/STOCKHOLM LO – BLACK, 42, Rp247.500`}
            >
              <div className="card-body text-center">
                <img
                  src={shoes_black}
                  alt="STOCKHOLM LO – BLACK"
                  className="productimg mb-4"
                />
                <h5 className="card-title">STOCKHOLM LO – BLACK</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/STOCKHOLM LO – ARMY, 41, Rp247.500`}
            >
              <div className="card-body text-center">
                <img
                  src={shoes_army}
                  alt="STOCKHOLM LO – ARMY"
                  className="productimg mb-4"
                />
                <h5 className="card-title">STOCKHOLM LO – ARMY</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/STOCKHOLM LO – NAVY, 43, Rp247.500`}
            >
              <div className="card-body text-center">
                <img
                  src={shoes_navy}
                  alt="STOCKHOLM LO – NAVY"
                  className="productimg mb-4"
                />
                <h5 className="card-title">STOCKHOLM LO – NAVY</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <h4 className="text-center my-3">
            Choose a shoes image for details and prices!
          </h4>
        </Route>
        <Route path={`${path}/:productId`}>
          <Shoes />
        </Route>
      </Switch>
    </div>
  );
}

function Shoes() {
  let { productId } = useParams();
  return (
    <div>
      <h4 className="text-center my-3">{productId}</h4>
    </div>
  );
}
