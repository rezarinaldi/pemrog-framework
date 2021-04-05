import React, { Component } from "react";

import dp from "../img/dp.jpg";

class About extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={dp}
          width="15%"
          alt="fotoprofil"
          className="my-5 rounded-circle"
        ></img>
        <h1>Reza Rinaldi</h1>
        <h3>TI-3H / 22 / 1841720078</h3>
      </div>
    );
  }
}

export default About;
