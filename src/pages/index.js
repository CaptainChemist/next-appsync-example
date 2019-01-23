import React from "react";
import TodosWithData from "../components/todos";

import withData from "../lib/withData";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello World</p>
        <TodosWithData />
      </div>
    );
  }
}

export default withData(App);
