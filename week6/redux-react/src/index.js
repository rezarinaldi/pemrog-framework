import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-button/src/styles/styles.scss";
import "react-awesome-button/src/styles/themes/theme-c137";
// import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { compose, createStore } from "redux";
import MainReducer from "./reducers/MainReducer";
import CreateTodo from "./containers/CreateTodo";
import Table from "./containers/Table";

const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore)(MainReducer);

ReactDOM.render(
  <Provider store={store}>
    <CreateTodo />
    <Table />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
