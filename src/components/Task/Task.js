import React from 'react';

import './Task.css';

const Task = (props) => {
    return (
        <div className="task" onDoubleClick={() => props.handleDeleteTask(props.task.id)}>{props.task.description}</div>
    )
}

export default Task;