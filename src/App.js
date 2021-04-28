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
import ProtectedRoutes from './ProtectedRoutes';

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
					<ProtectedRoutes exact path="/home" component={MainPage} />
					<ProtectedRoutes
						exact
						path="/profile/:username"
						component={ProfilePage}
					/>
					<ProtectedRoutes
						exact
						path="/status/:postId"
						component={TweetStatus}
					/>
					<ProtectedRoutes exact path="/bookmarks" component={Bookmarks} />
					<ProtectedRoutes exact path="/lists" component={Lists} />
					<ProtectedRoutes exact path="/editAccount" component={Edit} />
					<ProtectedRoutes exact path="/messages" component={Messages} />
					<Redirect to="/" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
