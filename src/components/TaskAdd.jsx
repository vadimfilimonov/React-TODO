import React from 'react';

class TaskAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  addTask = (event) => {
    event.preventDefault();
    const { input } = this.state;
    if (input) {
      this.props.addTask(input);
      this.setState({ input: '' });
    }
  }

  onChange = event => {
    this.setState({ input: event.target.value });
  }

  render() {
    const { input } = this.state;
    return (
      <form className="form" onSubmit={this.addTask}>
        <input className="form__input" onChange={this.onChange} value={input}></input>
        <button className="form__submit">Add</button>
      </form>
    );
  }
}

export default TaskAdd;
