import React from 'react';
import { withFirebase } from '../../context/firebase';

const SignOut = ({ firebase }) => (
    <button onClick={firebase.signOut}>Sign Out</button>
)

export default withFirebase(SignOut);