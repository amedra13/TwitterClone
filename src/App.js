import './styles/App.scss';
import MainPage from './pages/main/MainPage';
import Signup from './pages/signup/Signup';
import CreateAccount from './pages/createAccount/CreateAccount';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Signup} />
					<Route exact path="/createAccount" component={CreateAccount} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/home" component={MainPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
