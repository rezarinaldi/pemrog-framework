import React, { Component } from "react";
import RefsHOC from "./RefsHOC.jsx";

class RefsDemo extends Component {
  render() {
    const RefsComponent = RefsHOC(SampleComponent);
    return (
      <div className="container-fluid mt-3">
        <RefsComponent />
      </div>
    );
  }
}

class SampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getCurrentState() {
    console.log(this.state.value);
    return this.state.value;
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <div className="col-md-2">
        <input
          type="text"
          onChange={this.handleChange}
          className="form-control"
          placeholder="Input value"
        />
      </div>
    );
  }
}

export default RefsDemo;
