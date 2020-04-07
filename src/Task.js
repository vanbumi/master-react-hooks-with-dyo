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

    const completeTask = completedTask => () => {
        setCompletedTasks([...completedTasks, completedTask ]);
        setTasks(tasks.filter(task => task.id !== completedTask.id));
    }

    const deleteTask = task => () => {
        setCompletedTasks(completedTasks.filter(t => t.id !== task.id));
    }

    console.log('tasks', tasks);
    console.log('completedTasks', completedTasks);

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
                        <div key={task.id} onClick={completeTask(task)}>
                            {task.taskText}
                        </div>
                        )
                    })
                }
            </div>
            <div className='completed-list'>
                {
                    completedTasks.map(task => {
                        const { id, taskText } = task;

                        return (
                        <div key={id}>
                            {taskText} {' '}
                            <span onClick={deleteTask(task)} className='delete-task'>X</span>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Task;