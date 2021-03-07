import React from 'react';

const SingleTrend = ({ trend }) => {
	return (
		<div className="singleTrend">
			<h6 className="trendStyle">Trending {trend.section}</h6>
			<h4>{trend.hashTag}</h4>
			<h2 className="trendStyle">{trend.numberOfTweets} Tweets</h2>
			<h6 className="trendStyle">
				{trend.numberOfPeople} people are Tweeting about this
			</h6>
		</div>
	);
};

export default SingleTrend;
