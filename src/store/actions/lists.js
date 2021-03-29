export const loadLists = (followers, following) => {
	return {
		type: 'LOAD_LISTS',
		followersList: followers,
		followingList: following,
	};
};
