import React from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends React.Component {
    state = {
        counter: 0,
        tasks: []
    }
    // counter = this.state.tasks.id * 1;
    deleteTask = (id) => {
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(task => task.id !== id);
    }

    changeTaskStatus = (id) => {
        console.log('change status' + id);
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
        const task = {
            id: this.state.counter,
            text,
            date,
            important,
            active: true,
            finishDate: null
        }
        // this.counter++;
        this.setState(prevState => ({
            counter: prevState.counter + 1,
            tasks: [...prevState.tasks, task]
        }));
        return true
    }

    render() {
        const taskList = <TaskList tasks={this.state.tasks} delete={this.deleteTask} changeTaskStatus={this.changeTaskStatus}/>
        return (
            <div className="App">
                <AddTask add={this.addTask}/>
                {this.state.tasks.length > 0 ? taskList : null}
            </div>
        );
    }


}

export default App;
