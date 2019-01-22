import React from "react";
import Todos from "../components/todos";

class App extends React.Component {
  render() {
    console.log("props: ", this.props);
    return (
      <div>
        <p>Hello World</p>
        <Todos />
      </div>
    );
  }
}

export default App;

//This code is copied from /components/todos and works when pasted here but
//but does NOT work when we import the component from elsewhere

// import React from "react";

// import TodosQuery from "../graphql/components/todos";

// class Todos extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <p>Hello World</p>
//       </div>
//     );
//   }
// }

// export default TodosQuery(Todos);
