// @ts-check
import React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";

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
      <form style={{ display: "flex" }} onSubmit={this.addTask}>
        <TextField
          style={{ flexGrow: 1 }}
          variant="outlined"
          label="What needs to be done?"
          onChange={this.onChange}
          value={this.state.input}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          type="submit"
          disabled={this.state.input.length === 0}
        >
          Add
        </Button>
      </form>
    );
  }
}

export default TaskAdd;
