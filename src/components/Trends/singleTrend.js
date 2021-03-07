import React from 'react';

const SingleTrend = ({ trend }) => {
	return (
		<div className="singleTrend">
			<h6>Trending {trend.section}</h6>
			<h3>{trend.hashtag}</h3>
			<h2>{trend.numberOfTweets}</h2>
			<h6>{trend.numberOfPeople} people are Tweeting about this</h6>
		</div>
	);
};

export default SingleTrend;
