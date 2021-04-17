import React from 'react';
import './styles/App.scss';
import MainPage from './pages/MainPage';
import Signup from './pages/Signup';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import TweetStatus from './pages/TweetStatus';
import Bookmarks from './pages/Bookmarks';
import Lists from './pages/Lists';
import Edit from './pages/Edit';
import Messages from './pages/Messages';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Signup} />
					<Route exact path="/createAccount" component={CreateAccount} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/home">
						<MainPage />
					</Route>
					<Route exact path="/profile/:username" component={ProfilePage} />
					<Route exact path="/status/:postId" component={TweetStatus} />
					<Route exact path="/bookmarks" component={Bookmarks} />
					<Route exact path="/lists" component={Lists} />
					<Route exact path="/editAccount" component={Edit} />
					<Route exact path="/messages" component={Messages} />
					<Redirect to="/" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
