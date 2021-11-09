import React, { Component } from 'react';
import AddTask from '../TaskList/AddTask';
import TaskList from '../TaskList/TaskList';
import '../TaskList/App.css';

class Project2Page extends Component {
  counter = 9
  state = {
    tasks: []         
  }

  deleteTask = (id) => {
    console.log("delete elementu o id " + id);
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks
    // })

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log("change w stanie elementu o id " + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    // console.log("dodany obiekt");
    const task = {
      id: this.counter,
      text, // tekst z inputa
      date, //tekst z inputa
      important, //wartość z inputa
      active: true,
      finishDate: null
    }
    this.counter++
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))


    return true
  }

  render() {
    return (
      <div className="Project2Page">
        <h1>Projekt 2: Aplikacja "Rzeczy do zrobienia"</h1>
        <br/>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}
 
export default Project2Page;