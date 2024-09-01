import React, { PureComponent } from 'react';
import TodoItems from './TodoItem';
import './TodoList.css';


class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      completedTasks: [],
      taskInput: ''
    };
  }

  addTask = () => {
    if (this.state.taskInput.trim() !== '') {
      this.setState(prevState => ({
        tasks: [...prevState.tasks, prevState.taskInput],
        taskInput: ''
      }));
    }
  };

  completeTask = (index) => {
    const tasks = [...this.state.tasks];
    const taskToComplete = tasks.splice(index, 1)[0];
    this.setState(prevState => ({
      tasks,
      completedTasks: [...prevState.completedTasks, taskToComplete]
    }));
  };

  undoTask = (index) => {
    const completedTasks = [...this.state.completedTasks];
    const taskToUndo = completedTasks.splice(index, 1)[0];
    this.setState(prevState => ({
      completedTasks,
      tasks: [...prevState.tasks, taskToUndo]
    }));
  };

  deleteTask = (index) => {
    const completedTasks = [...this.state.completedTasks];
    completedTasks.splice(index, 1);
    this.setState({ completedTasks });
  };

  handleInputChange = (event) => {
    this.setState({ taskInput: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div>
          <h2>შესასრულებელი დავალებები</h2>
          <input 
            type="text" 
            value={this.state.taskInput} 
            onChange={this.handleInputChange} 
          />
          <button onClick={this.addTask}>დამატება</button>
          <TodoItems 
            tasks={this.state.tasks} 
            onComplete={this.completeTask} 
          />
        </div>
        <div>
          <h2>შესრულებული დავალებები</h2>
          <TodoItems 
            tasks={this.state.completedTasks} 
            onUndo={this.undoTask} 
            onDelete={this.deleteTask} 
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
