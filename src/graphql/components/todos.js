import React from "react";
import { Query } from "react-apollo";
import PropTypes from "prop-types";
import withData from "../../lib/withData";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

// import TODOS_QUERY from "../queries/todos.gql";

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

const TodosWithData = MyComponent =>
  withData(
    graphql(query, {
      options: {
        fetchPolicy: "cache-and-network"
      },
      props: props => ({ todos: props.data.listTodos ? props.data.listTodos.items : [] })
    })(MyComponent)
  );

export default TodosWithData;
export { TODOS_QUERY };
