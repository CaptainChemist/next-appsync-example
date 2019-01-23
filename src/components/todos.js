import React from "react";
import { Query } from "react-apollo";
import { listTodosQuery } from "../graphql/queries/todos.gql";
import { onCreateTodoSubscription } from "../graphql/subscriptions/onCreateTodo.gql";

const TodosWithData = () => (
  <Query query={listTodosQuery} fetchPolicy="cache-and-network">
    {({ loading, error, data: { listTodos }, subscribeToMore }) => {
      subscribeToMore({
        document: onCreateTodoSubscription,
        updateQuery: (
          prev,
          {
            subscriptionData: {
              data: { onCreateTodo }
            }
          }
        ) => {
          return {
            ...prev,
            listTodos: {
              __typename: "TodoConnection",
              items: [onCreateTodo, ...prev.listTodos.items.filter(todo => todo.id !== onCreateTodo.id)]
            }
          };
        }
      });
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
