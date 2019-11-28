import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AppHeader from './layout/app-header/AppHeader';
import Blackground from './layout/blackground/Blackground';
import AppContainer from './layout/app-container/AppContainer';
import * as Routes from './constants/routes';
import SignInPage from './components/sign-in/SignIn';
import { withFirebase } from './context/firebase';
import AuthUserContext from './context/auth-user';

class App extends Component{
	constructor(props) {
		super(props);

		this.state = {
			authUser: null
		}
	}

	componentDidMount() {
		this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
			authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
		})
	}

	componentWillUnmount() {
		this.listener();
	}

	render() {
		return (
			<AuthUserContext.Provider value={this.state.authUser}>
				<Router>
					<div className="App">
						<Blackground />
						<div className="container">
							<AppHeader authUser={this.state.authUser} />
							<Route exact path={ Routes.HOME } component={ AppContainer } />
							<Route path={ Routes.SIGNIN } component={ SignInPage } />
						</div>
					</div>
				</Router>
			</AuthUserContext.Provider>
		)
	}
}

export default withFirebase(App);
