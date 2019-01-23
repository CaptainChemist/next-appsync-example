import React from "react";
import { Query } from "react-apollo";

import { listTodosQuery } from "../graphql/queries/todos.gql";

const TodosWithData = () => (
  <Query query={listTodosQuery} fetchPolicy="cache-and-network">
    {({ loading, error, data: { listTodos } }) => {
      if (error) return <div>Error loading todos</div>;
      if (loading) return <div>Loading...</div>;
      return (
        <div>
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
