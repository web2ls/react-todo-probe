import React, { Component } from 'react';
import { withFirebase } from '../../context/firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const SignInPage = () => (
    <>
        <h3>SignIn</h3>
        <SignInForm />
    </>
)

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
}

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE}
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        this.props.firebase.signIn(email, password)
        .then(() => {
            console.log('Auth success');
            this.setState({ ...INITIAL_STATE });
            this.props.history.push('/');
        })
        .catch(error => {
            console.log('Error on Auth');
            this.setState({error})
        })
    }

    render() {
        const {email, password, error} = this.state;

        const isInvalid = email === '' || password === '';

        return (
            <form>
                <input 
                    className="input-reset ma3" 
                    type="text" 
                    name="email" 
                    placeholder="email..." 
                    value={email} 
                    onChange={this.handleChange} 
                    autoComplete="off" />
                <input 
                    className="input-reset ma3" 
                    type="password" 
                    name="password" 
                    placeholder="password..." 
                    value={password} 
                    onChange={this.handleChange} 
                    autoComplete="off" />
                <div className="error-message ma3 dark-red">{error && error.message}</div>
                <button disabled={isInvalid} className="ma4" type="submit" onClick={this.handleSubmit}>Sign In</button>
           </form>
        )
    }
}

const SignInForm = compose(
    withFirebase,
    withRouter
)(SignInFormBase);

export default SignInPage;