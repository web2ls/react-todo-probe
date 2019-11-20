import React from 'react';

import './AppHeader.css';
import SignOut from '../../components/sign-out/SignOut';

const  AppHeader = () => {
    return (
        <>
            <div className="app-header">
                <h2>instask</h2>
                <div className="sign-out-button">
                    <SignOut />
                </div>
            </div>
        </>
    )
}

export default AppHeader;