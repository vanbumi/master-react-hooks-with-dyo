import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Task() {
    const [taskText, setTaskText] = useState('')
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const updateTaksText = event => {
        setTaskText(event.target.value);
    }

    const addTask = () => {
        setTasks([ ...tasks, { taskText, id: uuidv4() } ]);
    }

    console.log('tasks', tasks)

    return (
        <div>
            <h3>My Task</h3>
            <div className='form'>
                <input type="text" value={taskText} onChange={updateTaksText} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className='task-list'>
                {
                    tasks.map(task => {
                        return (
                        <div key={task.id}>{task.taskText}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Task;