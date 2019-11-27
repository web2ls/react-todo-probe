import React from 'react';

import './Task.css';

const Task = (props) => {
    return (
        <div className="task">{props.task.description}</div>
    )
}

export default Task;