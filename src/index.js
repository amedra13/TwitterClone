import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import mainReducer from './store/reducers/mainReducer';
import tweetReducer from './store/reducers/tweetReducer';
import profileReducer from './store/reducers/profileReducer';
import bookmarkReducer from './store/reducers/bookmarkReducer';
import listsReducer from './store/reducers/listsReducer';
import App from './App';

const rootReducer = combineReducers({
	main: mainReducer,
	tweet: tweetReducer,
	profile: profileReducer,
	bookmarks: bookmarkReducer,
	lists: listsReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
