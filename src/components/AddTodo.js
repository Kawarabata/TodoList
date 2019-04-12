import React from "react";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.title}
            onChange={this.handleChange}
            className="input_form"
          />
          <input
            type="submit"
            value="Add to todo list"
            className="submit_button"
          />
        </form>
      </div>
    );
  }

  handleChange = event => {
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
}
