const initialState = {
	statusTweet: null,
	tweetComments: null,
};

const tweetReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_STATUS':
			return {
				...state,
				statusTweet: action.status,
				tweetComments: action.comments,
			};
		case 'TEST':
			console.log('inside tweet reducer');
			return state;
		default:
			return state;
	}
};

export default tweetReducer;
