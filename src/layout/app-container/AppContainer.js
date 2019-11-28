import React from 'react';
import TaskList from '../../components/task-list/TaskList';
import AuthUserContext from '../../context/auth-user';

const AppContainer = (props) => {
    return (
        <>
            <div className="app-container">
                <AuthUserContext.Consumer>
                    { authUser => <TaskList {...props} authUser={authUser} /> }
                </AuthUserContext.Consumer>
            </div>
        </>
    )
}

export default AppContainer;