import React from 'react';
import FeedHeader from '../Feed/FeedHeader';
import SinglePost from '../Feed/SinglePost';
import LoadingPost from '../Feed/LoadingPosts';
import { getTime } from '../../util/helperFunctions';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const Feed = ({ posts, userId, onUpdateFeedPosts }) => {
	const updateFeed = async () => {
		const feedResponse = await axios.get(
			`http://localhost:8080/updateFeed/${userId}`
		);

		onUpdateFeedPosts(feedResponse.data.allPosts);
	};

	const likeHandler = async (postId, username) => {
		await axios.post(`http://localhost:8080/like/${postId}`, {
			username: username,
		});
		updateFeed();
	};

	const bookmarkHandler = async (postId, id) => {
		const response = await axios.post(
			`http://localhost:8080/bookmarks/${postId}`,
			{
				userId: id,
			}
		);
		console.log(response.data.message);
		updateFeed();
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
							increaseLike={likeHandler}
							delay={i}
							updateFeed={updateFeed}
							bookmarkHandler={bookmarkHandler}
						/>
					);
				})
			) : (
				<LoadingPost />
			)}
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUpdateFeedPosts: (updatedPosts) =>
			dispatch(actions.updateFeedPosts(updatedPosts)),
	};
};

export default connect(null, mapDispatchToProps)(Feed);
