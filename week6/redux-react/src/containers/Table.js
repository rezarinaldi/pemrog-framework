import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  setVisibilityFilter,
} from "../actions/actionCreator";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../actions/actionsTypes";
import { bindActionCreators } from "redux";
import { AwesomeButton } from "react-awesome-button";

class Table extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12">
          <nav className="mt-5">
            <ol className="breadcrumb">
              <li
                className={
                  "breadcrumb-item " +
                  (this.props.visibilityFilter === SHOW_ALL ? "active" : "")
                }
                onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}
              >
                All
              </li>
              <li
                className={
                  "breadcrumb-item " +
                  (this.props.visibilityFilter === SHOW_COMPLETED
                    ? "active"
                    : "")
                }
                onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
              >
                Completed
              </li>
              <li
                className={
                  "breadcrumb-item " +
                  (this.props.visibilityFilter === SHOW_ACTIVE ? "active" : "")
                }
                onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}
              >
                Active
              </li>
            </ol>
          </nav>
          {this.props.todos.length !== 0 ? (
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">Todos</th> <th scope="col"> Actions </th>
                </tr>
              </thead>
              <tbody>
                {this.props.todos.map((todo) => (
                  <tr key={todo.id}>
                    <td
                      style={{
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {todo.text} {todo.completed === true ? "(completed)" : ""}
                    </td>
                    <td>
                      <AwesomeButton
                        type="link"
                        style={{ marginRight: "20px" }}
                        ripple
                        onPress={() => this.props.deleteTodo(todo.id)}
                      >
                        ❌ Delete
                      </AwesomeButton>
                      <AwesomeButton
                        type="secondary"
                        ripple
                        onPress={() => this.props.toggleTodo(todo.id)}
                      >
                        ✔ Completed
                      </AwesomeButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div
              style={{ marginTop: "50px" }}
              className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
            >
              <div className="alert alert-danger" role="alert">
                Todo List is empty or Filter results show no results
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deleteTodo,
      toggleTodo,
      setVisibilityFilter,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
