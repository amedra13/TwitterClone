const initialState = {
	following: null,
	followers: null,
};

const listsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_LISTS':
			return {
				...state,
				following: action.followingList,
				followers: action.followersList,
			};
		default:
			return state;
	}
};

export default listsReducer;
