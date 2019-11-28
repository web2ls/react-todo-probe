import React from 'react';
import AuthUserContext from '../../context/auth-user';

import './AppHeader.css';
import SignOut from '../../components/sign-out/SignOut';

const  AppHeader = (props) => {
    const markup = props.authUser ? <div className="sign-out-button"><SignOut /></div> : <div></div>;
    return (
        <>
            <div className="app-header">
                <h2>instask</h2>
                {markup}
            </div>
        </>
    )
}

export default AppHeader;