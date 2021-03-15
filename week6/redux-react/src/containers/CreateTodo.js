import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/actionCreator";
import { bindActionCreators } from "redux";
import { AwesomeButton } from "react-awesome-button";

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todotext: "",
    };
    this.onChangeTodoText = this.onChangeTodoText.bind(this);
  }

  onChangeTodoText(e) {
    this.setState({
      todotext: e.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="form-group row">
          <div className="col-sm-10">
            <div className="input-group mt-5">
              <span className="input-group-text">📋 Add todo here</span>
              <input
                type="text"
                onChange={this.onChangeTodoText}
                value={this.state.todotext}
                className="form-control"
                aria-label="Add todo here"
              />
            </div>
            <AwesomeButton
              type="link"
              style={{ marginTop: "25px", marginRight: "15px" }}
              ripple
              onPress={() => this.setState({ todotext: "" })}
            >
              ⚠ Cancel
            </AwesomeButton>
            <AwesomeButton
              type="primary"
              style={{ marginTop: "25px" }}
              ripple
              onPress={() => {
                this.props.addTodo(this.state.todotext);
                this.setState({ todotext: "" });
              }}
            >
              ☑ Add Todo
            </AwesomeButton>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addTodo,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(CreateTodo);
