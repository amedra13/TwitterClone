export const setTweetComments = (comments) => {
	console.log('inside tweet action function');
	return {
		type: 'SET_TWEET_COMMENTS',
		comments: comments,
	};
};

export const setStatus = (tweet) => {
	return {
		type: 'SET_STATUS',
		status: tweet,
		comments: tweet.comments,
	};
};
