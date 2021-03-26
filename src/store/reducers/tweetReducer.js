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
		case 'SET_TWEET_COMMENTS':
			return {
				...state,
				tweetComments: action.comments,
			};

		default:
			return state;
	}
};

export default tweetReducer;
