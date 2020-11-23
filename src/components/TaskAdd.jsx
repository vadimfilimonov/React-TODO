// @ts-check
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";

const TaskAdd = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input) {
      props.addTask(input);
      setInput("");
    }
  };

  return (
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
      <TextField
        style={{ flexGrow: 1 }}
        variant="outlined"
        label="What needs to be done?"
        onChange={(event) => setInput(event.target.value)}
        value={input}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        startIcon={<SaveIcon />}
        disabled={input.length === 0}
      >
        Add
      </Button>
    </form>
  );
};

export default TaskAdd;
