// @ts-check
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

const TaskAdd = ({onAddTask}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(value);
    setValue('');
  };

  return (
    <form style={{display: 'flex'}} onSubmit={handleSubmit}>
      <TextField
        style={{flexGrow: 1}}
        variant="outlined"
        label="What needs to be done?"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        startIcon={<SaveIcon />}
        disabled={value.length === 0}
      >
        Add
      </Button>
    </form>
  );
};

export default TaskAdd;
