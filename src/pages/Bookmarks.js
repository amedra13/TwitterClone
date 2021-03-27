import React, { useEffect } from 'react';
import SideBar from '../components/mainPage/Sidebar';
import SinglePost from '../components/Feed/SinglePost';
import Trend from '../components/mainPage/Trend';
import { getTime } from '../util/helperFunctions';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../store/actions/index';

const Bookmarks = ({ user, bookmarks, onLoadBookmarks, onUpdateBookmarks }) => {
	useEffect(() => {
		const getBookmarks = async () => {
			const results = await axios.get(
				`http://localhost:8080/bookmarks/${user._id}`
			);
			console.log(results.data.posts);
			onLoadBookmarks(results.data.posts);
		};
		getBookmarks();
	}, [onLoadBookmarks, user]);

	const updateBookmarks = async () => {
		const response = await axios.get(
			`http://localhost:8080/updateBookmarks/${user._id}`
		);
		onUpdateBookmarks(response.data.posts);
	};

	const bookmarkHandler = async (postId, id) => {
		const response = await axios.post(
			`http://localhost:8080/bookmarks/${postId}`,
			{
				userId: id,
			}
		);
		console.log(response.data.message);
		updateBookmarks();
	};

	return (
		<div className="bookmarks">
			<SideBar username={user?.userName} userId={user?._id} />
			<div className="bookmarks__posts">
				<h1>Saved Posts from users</h1>
				{bookmarks &&
					bookmarks.map((post, i) => (
						<SinglePost
							key={post._id}
							post={post}
							timePosted={getTime(post.createdAt)}
							// increaseLike={likeHandler}
							delay={i}
							updateFeed={updateBookmarks}
							bookmarkHandler={bookmarkHandler}
						/>
					))}
			</div>
			<Trend />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.main.user,
		bookmarks: state.bookmarks.bookmarks,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onLoadBookmarks: (posts) => dispatch(actions.loadBookmarks(posts)),
		onUpdateBookmarks: (posts) => dispatch(actions.updateBookmarks(posts)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);
