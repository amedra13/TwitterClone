import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const LoadingPosts = ({ name }) => {
	return (
		<div className="loadingPosts">
			<h2>Loading {name}...</h2>
			<HashLoader color="#00b4d8" />
		</div>
	);
};

export default LoadingPosts;
