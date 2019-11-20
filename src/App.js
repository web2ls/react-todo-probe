import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AppHeader from './layout/app-header/AppHeader';
import AppContainer from './layout/app-container/AppContainer';
import * as Routes from './constants/routes';
import SignInPage from './components/sign-in/SignIn';

function App() {
	return (
		<Router>
			<div className="App">
				<div className="container">
					<AppHeader />
					<Route exact path={ Routes.HOME } component={ AppContainer } />
					<Route path={ Routes.SIGNIN } component={ SignInPage } />
				</div>
			</div>
		</Router>
	)
}

export default App;
