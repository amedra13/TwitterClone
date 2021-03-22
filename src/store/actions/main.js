export const loadUser = (user, feedPosts) => {
	return {
		type: 'LOAD_USER',
		user: user,
		feedPosts: feedPosts,
	};
};

export const setProfile = (user, posts) => {
	return {
		type: 'SET_PROFILE',
		profileUser: user,
		profilePosts: posts,
	};
};

export const updateFollow = (list) => {
	console.log('updated List ==>>', list);
	return {
		type: 'UPDATE_FOLLOW',
		updatedList: list,
	};
};
export const followStatus = (isUser, following) => {
	return {
		type: 'FOLLOW_STATUS',
		isUser: isUser,
		isFollowing: following,
	};
};

export const updateFeedPosts = (updatedPosts) => {
	return {
		type: 'UPDATED_POSTS',
		updatedPosts: updatedPosts,
	};
};

export const setStatus = (tweet) => {
	return {
		type: 'SET_STATUS',
		status: tweet,
	};
};
