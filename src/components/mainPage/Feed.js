import React from 'react';
// import axios from 'axios'
import FeedHeader from '../Feed/FeedHeader';
import SinglePost from '../Feed/SinglePost';
import LoadingPost from '../Feed/LoadingPosts';
import axios from 'axios';
const Feed = ({ posts, userId }) => {
	const getTime = (date) => {
		const datePosted = new Date(date);
		const dateNow = new Date();
		const diffInMilliSeconds = Math.abs(dateNow - datePosted) / 1000;
		return Math.floor(diffInMilliSeconds / 60) % 60;
	};

	const incrementIcon = (id, icon) => {
		axios
			.post(`http://localhost:8080/post/${id}`, {
				icon: icon,
			})
			.then((res) => {
				console.log(res.data.message);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="feed">
			<FeedHeader userId={userId} />
			{posts ? (
				posts.map((singlePost) => {
					return (
						<SinglePost
							key={singlePost._id}
							post={singlePost}
							timePosted={getTime(singlePost.createdAt)}
							increaseLike={incrementIcon}
						/>
					);
				})
			) : (
				<LoadingPost />
			)}
		</div>
	);
};

export default Feed;
