import React from "react";
import { Mutation } from "react-apollo";
import { createTodoMutation } from "../graphql/mutations/createTodo.gql";

class TodosWithData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
  }

  render() {
    return (
      <Mutation mutation={createTodoMutation}>
        {(createTodo, { data }) => (
          <div>
            <input value={this.state.todo} onChange={e => this.setState({ todo: e.target.value })} />
            <button
              onClick={e => {
                const variables = { name: this.state.todo, completed: false };
                createTodo({ variables });
                this.setState({ todo: "" });
              }}
            >
              Create Todo
            </button>
          </div>
        )}
      </Mutation>
    );
  }
}

export default TodosWithData;
