import React from 'react';
import Task from "./Task";
import './TaskList.css'

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    done.sort((a, b) => {
        return b.finishDate - a.finishDate;
    })
    if (active.length > 2) {
        active.sort((a, b) => {
                a = a.text.toLowerCase();
                b = b.text.toLowerCase();
                if (a.text < b.text) {
                    return -1
                }
                if (a.text > b.text) {
                    return 1
                }
                if (a.text > b.text) {
                    return 0
                }
            }
        );
    }

    const activeTasks = active.map(task => <Task key={task.id} task={task}
                                                 delete={props.delete}
                                                 changeTaskStatus={props.changeTaskStatus}></Task>
    );
    const doneTasks = done.map(task => <Task key={task.id} task={task}
                                             delete={props.delete}
                                             changeTaskStatus={props.changeTaskStatus}></Task>
    );

    return (
        <>
            <div className='list'>
                <div className='list-active'>
                    <h1>Zadania do zrobienia</h1>
                    {activeTasks}
                </div>
                <div className='list-done'>
                    <h2>Zadania zrobione</h2>
                    <span style={{color: '#baa'}}>{doneTasks}</span>

                </div>
            </div>
        </>
    )
}

export default TaskList;