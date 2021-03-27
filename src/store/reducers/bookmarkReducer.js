const initialState = {
	bookmarks: null,
};

const bookmarkReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_BOOKMARKS':
			return { ...state, bookmarks: action.bookmarks };
		case 'UPDATE_BOOKMARKS':
			return { ...state, bookmarks: action.bookmarks };
		default:
			return state;
	}
};

export default bookmarkReducer;
