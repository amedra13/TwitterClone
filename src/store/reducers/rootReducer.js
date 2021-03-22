const initialState = {
	user: 'THIS IS ANDRES DUUUUUU',
	profileUser: null,
	profilePosts: null,
	feedPosts: null,
	isLoggedIn: false,
	isUser: false,
	isFollowing: false,
	statusTweet: null,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_USER':
			return { ...state, user: action.user, feedPosts: action.feedPosts };
		case 'SET_PROFILE':
			return {
				...state,
				profileUser: action.profileUser,
				profilePosts: action.profilePosts,
			};
		case 'UPDATE_FOLLOW':
			const updatedUser = { ...state.user };
			updatedUser.following = action.updatedList;
			return {
				...state,
				user: updatedUser,
			};
		case 'FOLLOW_STATUS':
			return {
				...state,
				isUser: action.isUser,
				isFollowing: action.isFollowing,
			};
		case 'UPDATED_POSTS':
			return {
				...state,
				feedPosts: action.updatedPosts,
			};
		case 'SET_STATUS':
			return {
				...state,
				statusTweet: action.status,
			};
		default:
			return state;
	}
};

export default rootReducer;
