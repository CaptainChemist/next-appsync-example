import React from "react";
import Todos from "../components/todos";
import TodosWithData from "../components/todos-new";

import withData from "../lib/withData";
import gql from "graphql-tag";

const query = gql`
  query listTodos {
    listTodos {
      items {
        id
        name
        completed
      }
    }
  }
`;

class App extends React.Component {
  render() {
    console.log("props: ", this.props);
    return (
      <div>
        <p>Hello World</p>
        <Todos />
        <TodosWithData />
      </div>
    );
  }
}

export default withData(App);
