import React from "react";

import TodosQuery from "../graphql/components/todos";

class Todos extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>Todos</p>
      </div>
    );
  }
}

export default TodosQuery(Todos);
