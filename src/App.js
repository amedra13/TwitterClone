import './styles/App.scss';
import MainPage from './pages/main/MainPage';
import Signup from './pages/signup/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Signup} />
					<Route exact path="/home" component={MainPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
