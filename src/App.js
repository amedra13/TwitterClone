import React, { useState } from 'react';
import './styles/App.scss';
import MainPage from './pages/main/MainPage';
import Signup from './pages/signup/Signup';
import CreateAccount from './pages/createAccount/CreateAccount';
import Login from './pages/login/Login';
import ProfilePage from './pages/profile/ProfilePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const loginHandler = (value) => {
		setIsLoggedIn(value);
	};
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Signup} />
					<Route
						exact
						path="/createAccount/:userId"
						component={CreateAccount}
					/>
					<Route exact path="/login" component={Login} />
					<Route exact path="/home/:userId">
						<MainPage isLoggedIn={isLoggedIn} login={loginHandler} />
					</Route>
					<Route exact path="/profile/:username" component={ProfilePage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
