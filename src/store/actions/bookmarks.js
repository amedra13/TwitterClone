export const loadBookmarks = (posts) => {
	return {
		type: 'LOAD_BOOKMARKS',
		bookmarks: posts,
	};
};

export const updateBookmarks = (posts) => {
	return {
		type: 'UPDATE_BOOKMARKS',
		bookmarks: posts,
	};
};
