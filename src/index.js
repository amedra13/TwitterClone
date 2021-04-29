import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import mainReducer from './store/reducers/mainReducer';
import tweetReducer from './store/reducers/tweetReducer';
import profileReducer from './store/reducers/profileReducer';
import bookmarkReducer from './store/reducers/bookmarkReducer';
import listsReducer from './store/reducers/listsReducer';
import messagesReducer from './store/reducers/messagesReducer';

import App from './App';

const appReducer = combineReducers({
	main: mainReducer,
	tweet: tweetReducer,
	profile: profileReducer,
	bookmarks: bookmarkReducer,
	lists: listsReducer,
	messages: messagesReducer,
});

const persistConfig = {
	key: 'root',
	storage,
};
const rootReducer = (state, action) => {
	if (action.type === 'USER_LOGGED_OUT') {
		storage.removeItem('persist:root');
		localStorage.removeItem('token');
		state = undefined;
	}
	return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
