export const tweetComments = () => {
	console.log('inside tweet action function');
	return {
		type: 'TEST',
	};
};

export const setStatus = (tweet) => {
	return {
		type: 'SET_STATUS',
		status: tweet,
		comments: tweet.comments,
	};
};
