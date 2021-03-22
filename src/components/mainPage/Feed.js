import React from 'react';
import FeedHeader from '../Feed/FeedHeader';
import SinglePost from '../Feed/SinglePost';
import LoadingPost from '../Feed/LoadingPosts';
import { getTime } from '../../util/helperFunctions';
import axios from 'axios';
const Feed = ({ posts, userId }) => {
	const incrementIcon = (id, icon) => {
		axios
			.post(`http://localhost:8080/post/${id}`, {
				icon: icon,
			})
			.then((res) => {
				// console.log(res.data.message);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="feed">
			<FeedHeader userId={userId} />
			{posts ? (
				posts.map((singlePost, i) => {
					return (
						<SinglePost
							key={singlePost._id}
							post={singlePost}
							timePosted={getTime(singlePost.createdAt)}
							increaseLike={incrementIcon}
							delay={i}
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
