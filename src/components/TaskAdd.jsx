import React from "react";

class TaskAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  addTask = (event) => {
    event.preventDefault();
    const { input } = this.state;
    if (input) {
      this.props.addTask(input);
      this.setState({ input: "" });
    }
  };

  onChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.addTask}>
        <div className="input-group">
          <input
            className="form-control"
            onChange={this.onChange}
            value={this.state.input}
          ></input>
          <div className="input-group-append">
            <button className="input-group-text">Add</button>
          </div>
        </div>
      </form>
    );
  }
}

export default TaskAdd;
