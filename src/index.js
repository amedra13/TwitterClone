import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import mainReducer from './store/reducers/mainReducer';
import tweetReducer from './store/reducers/tweetReducer';
import App from './App';

const rootReducer = combineReducers({ main: mainReducer, tweet: tweetReducer });

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
