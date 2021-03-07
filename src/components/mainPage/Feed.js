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

	const fakeUser2 = {
		twitterName: 'Philidephia 76ers',
		twitterHandle: '@76ers',
		timePosted: '10m',
		message:
			'@JoelEmbid announced today that he will donate his winnings from Sunday’s NBA All-Star Game to Philadelphia homeless shelters, including Project HOME, Sunday Breakfast Mission and Youth Service INC.',
		comments: 10,
		retweets: 200,
		favorite: 4546,
		forwarded: 4362,
	};
	return (
		<div className="feed">
			<FeedHeader />
			<SinglePost post={fakeUser} />
			<SinglePost post={fakeUser2} />
			<SinglePost post={fakeUser} />
			<SinglePost post={fakeUser2} />
		</div>
	);
};

export default Feed;
