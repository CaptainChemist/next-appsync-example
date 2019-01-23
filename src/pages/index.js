import React from "react";
import TodosWithData from "../components/todos";
import NewTodo from "../components/new-todo";

import withData from "../lib/withData";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello World</p>
        <NewTodo />
        <TodosWithData />
      </div>
    );
  }
}

export default withData(App);
