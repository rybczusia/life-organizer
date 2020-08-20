import React from 'react';
import './Task.css';

const Task = (props) => {
    const style= {
        color: 'red'
    }
    const {text, date, id, active, important, finishDate} = props.task;
    if (active) {
        return (
            <div className='task'>
                <button className='btn-task'>
                    <strong style={important ? style : null}>{text}</strong> do <span>{date}</span>
                </button>
                <button onClick={() => props.changeTaskStatus(id)}>Zostało zrobione</button>
                <button onClick={() => props.delete(id)}>X</button>

            </div>
        );
    } else {
        const finish = new Date(finishDate).toLocaleDateString()
        return (
            <div className='task'>
                <p>
                    <strong>{text}</strong> do <em>{date} </em>
                    - potwierdzenie wykonania <span>{finish}</span>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>


            </div>
        )
    }
}

export default Task;