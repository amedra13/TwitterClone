export const loadUser = (user, feedPosts) => {
	return {
		type: 'LOAD_USER',
		user: user,
		feedPosts: feedPosts,
	};
};

export const profilePosts = (user, posts) => {
	return {
		type: 'USER_POSTS',
		profileUser: user,
		profilePosts: posts,
	};
};
