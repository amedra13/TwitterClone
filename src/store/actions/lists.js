export const loadLists = (followers, following) => {
	return {
		type: 'LOAD_LISTS',
		followersList: followers,
		followingList: following,
	};
};

export const reloadFollowing = (list) => {
	return {
		type: 'RELOAD_FOLLOWING',
		followingList: list,
	};
};
export const reloadFollowers = (list) => {
	return {
		type: 'RELOAD_FOLLOWERS',
		followersList: list,
	};
};
