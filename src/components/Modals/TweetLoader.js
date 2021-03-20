import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
const TweetLoader = () => {
	return (
		<div className="tweetLoader">
			<ClipLoader color="#00b4d8" size={60} />
		</div>
	);
};

export default TweetLoader;
