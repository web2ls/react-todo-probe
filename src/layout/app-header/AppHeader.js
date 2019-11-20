import React from 'react';
import AuthUserContext from '../../context/auth-user';

import './AppHeader.css';
import SignOut from '../../components/sign-out/SignOut';

const  AppHeader = (props) => {
    return (
        <>
            <div className="app-header">
                <h2>instask</h2>
                <AuthUserContext.Consumer>
                    { authUser => authUser ? <div className="sign-out-button"><SignOut /></div> : <div></div> }
                </AuthUserContext.Consumer>
            </div>
        </>
    )
}

export default AppHeader;