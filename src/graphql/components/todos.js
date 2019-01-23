import { graphql } from "react-apollo";
import { listTodos } from "../queries/todos.gql";

const TodosWithData = MyComponent =>
  graphql(listTodos, {
    options: {
      fetchPolicy: "cache-and-network"
    },
    props: props => ({ todos: props.data.listTodos ? props.data.listTodos.items : [] })
  })(MyComponent);

export default TodosWithData;
export { TODOS_QUERY };
