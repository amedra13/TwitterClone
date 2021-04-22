import React from 'react';
import FeedHeader from '../Feed/FeedHeader';
import SinglePost from '../Feed/SinglePost';
import LoadingPost from '../Feed/LoadingPosts';
import moment from 'moment';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const Feed = ({ posts, userId, profileImage, onUpdateFeedPosts }) => {
	const updateFeed = async () => {
		const feedResponse = await axios.get(
			`http://localhost:8080/updateFeed/${userId}`
		);

		onUpdateFeedPosts(feedResponse.data.allPosts);
	};

	const bookmarkHandler = async (postId, id) => {
		await axios.post(`http://localhost:8080/bookmarks/${postId}`, {
			userId: id,
		});
		updateFeed();
	};

	return (
		<div className="feed">
			<FeedHeader userId={userId} profileImage={profileImage} />
			{posts ? (
				posts.map((singlePost, i) => {
					return (
						<SinglePost
							key={singlePost._id}
							post={singlePost}
							timePosted={moment(singlePost.createdAt).fromNow()}
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
