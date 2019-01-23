import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import NewTodo from "./new-todo";

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

const TodosWithData = () => (
  <Query query={query} fetchPolicy="cache-and-network">
    {({ loading, error, data: { listTodos } }) => {
      if (error) return <div>Error loading todos</div>;
      if (loading) return <div>Loading...</div>;
      return (
        <div>
          <NewTodo />

          <ul>
            {listTodos.items.map(todo => (
              <li key={todo.id}>{`${todo.name}${todo.completed ? " - DONE" : ""}`}</li>
            ))}
          </ul>
        </div>
      );
    }}
  </Query>
);

export default TodosWithData;
