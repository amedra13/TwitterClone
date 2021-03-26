export const setProfile = (user, posts) => {
	return {
		type: 'SET_PROFILE',
		profileUser: user,
		profilePosts: posts,
	};
};
export const updateProfilePosts = (posts) => {
	return{
		type:'UPDATE_PROFILE_POSTS',
		updatedPosts:posts
	}
}