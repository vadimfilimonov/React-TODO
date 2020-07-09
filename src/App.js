import React from 'react';
import nextId from "react-id-generator";
import Task from './components/Task.jsx';
import TaskAdd from './components/TaskAdd.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    }
  }

  addTask = title => {
    this.setState(state => {
      let { tasks } = state;
      const newTask = {
        id: nextId(),
        title,
        done: false,
      };
      const newsTasks = [newTask, ...tasks];
      return { tasks: newsTasks };
    });
  }

  doneTask = id => {
    this.setState(state => {
      const { tasks } = state;
      const task = tasks.find(task => task.id === id);
      task.done = true;
      return tasks;
    });
  }

  undoneTask = id => {
    this.setState(state => {
      const { tasks } = state;
      const task = tasks.find(task => task.id === id);
      task.done = false;
      return tasks;
    });
  }

  deleteTask = id => {
    this.setState(state => {
      const { tasks } = state;
      const newTasks = tasks.filter(task => task.id !== id);
      return { tasks: newTasks };
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="todo">
        <h1>Tasks</h1>
        <TaskAdd addTask={this.addTask}></TaskAdd>
        {tasks.map(task => (
          <Task
            doneTask={() => this.doneTask(task.id)}
            undoneTask={() => this.undoneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
            task={task}
            key={task.id}
          ></Task>
        ))}
      </div>
    );
  }
}

export default App;
