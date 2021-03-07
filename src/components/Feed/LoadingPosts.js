import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const LoadingPosts = () => {
	return (
		<div className="loadingPosts">
			<h2>Loading Tweets...</h2>
			<HashLoader color="#00b4d8" />
		</div>
	);
};

export default LoadingPosts;
