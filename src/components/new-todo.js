import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const mutation = gql`
  mutation createTodo($name: String!, $completed: Boolean!) {
    createTodo(input: { name: $name, completed: $completed }) {
      id
      name
      completed
    }
  }
`;

class TodosWithData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
  }

  render() {
    return (
      <Mutation mutation={mutation}>
        {(createTodo, { data }) => (
          <div>
            <input value={this.state.todo} onChange={e => this.setState({ todo: e.target.value })} />
            <button
              onClick={event => {
                const todo = { name: this.state.todo, completed: false };
                console.log(todo);

                createTodo({
                  variables: {
                    ...todo
                  }
                });
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
