import React, { Component } from 'react';
import { withFirebase } from '../../context/firebase';

import './TaskList.css';

const ENTER_BUTTON = 13;

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [], error: null };
    }

    componentDidMount() {
        const ref = this.props.firebase.database.ref('tasks');
        ref.once("value").then(snapshot => {
            const tasksList = []
            const data = snapshot.val();
            for (let key in data) {
                tasksList.push({ id: key, description: data[key] });
            }
            this.setState({ tasks: tasksList });
        })
        .catch(error => {
            console.log(error);
            this.setState({ error: error.message });
        });
    }

    handleAddTask = (event) => {
        if (event.keyCode !== ENTER_BUTTON)
            return;

        const newTask = event.target.value;
        const ref = this.props.firebase.database.ref('tasks');
        ref.push(newTask).then(res => {
            console.log(res);
            const createdTask = { id: res.key, description: newTask };
            const tasks = this.state.tasks;
            tasks.push(createdTask);
            this.setState({ tasks: tasks });
            this.taskInput.value = '';
        })
        .catch(error => {
            console.log(error);
            this.setState({ error: error.message });
        })
    }

    render() {
        const { tasks, error } = this.state;
        const tasksList = tasks.map(task => (
            <div key={task.id} className="task">{task.description}</div>
        ))

        return (
            <>
                <div className="error-section">{error}</div>
                <input type="text" className="task-input" placeholder="set task here..." onKeyDown={this.handleAddTask} ref={(input) => this.taskInput = input} />
                <div className="task-list">
                    <h3>Make this tasks immediatly</h3>
                    {tasksList}
                </div>
            </>
        )
    }
}

export default withFirebase(TaskList);