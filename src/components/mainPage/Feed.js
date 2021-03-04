import React from 'react';
import FeedHeader from '../Feed/FeedHeader';
import SinglePost from '../Feed/SinglePost';
const Feed = () => {
	const fakeUser = {
		twitterName: 'Dora',
		twitterHandle: '@doradadestroya',
		timePosted: '3m',
		message:
			'Giving stand up comedy a go! Hit me up if you a ticket #heregoesnothing',
		comments: 1,
		retweets: 0,
		favorite: 8,
		forwarded: 0,
	};
	return (
		<div className="feed">
			<FeedHeader />
			<SinglePost post={fakeUser} />
		</div>
	);
};

export default Feed;
