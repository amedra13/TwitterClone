import React from 'react';
import FeedHeader from '../Feed/FeedHeader';
import SinglePost from '../Feed/SinglePost';
import LoadingPost from '../Feed/LoadingPosts';
const Feed = ({ posts }) => {
	return (
		<div className="feed">
			<FeedHeader />
			{posts ? (
				posts.map((singlePost) => {
					return <SinglePost key={singlePost._id} post={singlePost} />;
				})
			) : (
				<LoadingPost />
			)}
		</div>
	);
};

export default Feed;
