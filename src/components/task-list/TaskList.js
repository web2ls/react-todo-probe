import React, { Component } from 'react';
import axios from 'axios';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [
            {
                id: 1,
                description: 'blblblflfl'
            },
            {
                id: 2,
                description: 'sdsdsdsdsd'
            },
            {
                id: 3,
                description: 'dfdfdfdfdfd'
            }
        ] };
    }

    render() {

        const tasksList = this.state.tasks.map(task => (
            <div key={task.id} className="task">Tasksdss</div>
        ))

        return (
            <>
                <div className="task-list">
                    <h3>Make this tasks immediatly</h3>
                    {tasksList}
                </div>
            </>
        )
    }
}

export default TaskList;