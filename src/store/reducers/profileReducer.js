const initialState = {
	profileUser: null,
	profilePosts: null,
};


const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_PROFILE':
			return {
				...state,
				profileUser: action.profileUser,
				profilePosts: action.profilePosts,
			};
		case 'UPDATE_PROFILE_POSTS':
			return{
				...state,
				profilePosts: action.updatedPosts
			}
		default:
			return state;
	}
};

export default profileReducer;