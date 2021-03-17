const initialState = {
	user: 'THIS IS ANDRES DUUUUUU',
	profileUser: null,
	profilePosts: null,
	feedPosts: null,
	isLoggedIn: false,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_USER':
			return { ...state, user: action.user, feedPosts: action.feedPosts };
		case 'USER_POSTS':
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
		default:
			return state;
	}
};

export default rootReducer;
