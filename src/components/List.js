import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // propsの中からdeleteTodoを受け取っておくと、呼び出す時this.props
    // const { deleteTodo, todos } = this.props;
    const list = this.props.todos.map(todo => {
      return (
        <li key={this.props.id}>
          {todo.title}{" "}
          <button
            onClick={() => {
              this.props.deleteTodo(todo.id);
            }}
          >
            delete
          </button>
        </li>
      );
    });
    return (
      <div>
        <ul>{list}</ul>
      </div>
    );
  }
}
