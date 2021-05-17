import React, { useEffect } from 'react';
import SideBar from '../components/mainPage/Sidebar';
import SinglePost from '../components/Feed/SinglePost';
import Trend from '../components/mainPage/Trend';
import moment from 'moment';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../store/actions/index';
import LoadingPosts from '../components/Feed/LoadingPosts';

const Bookmarks = ({ user, bookmarks, onLoadBookmarks, onUpdateBookmarks }) => {
	useEffect(() => {
		const getBookmarks = async () => {
			const results = await axios.get(
				`http://localhost:8080/bookmarks/${user._id}`
			);
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
		await axios.post(`http://localhost:8080/bookmarks/${postId}`, {
			userId: id,
		});
		updateBookmarks();
	};

	return (
		<div className="bookmarks">
			<SideBar />
			<div className="bookmarks__posts">
				<div className="bookmarks__title">
					<h3>Saved Posts from Users</h3>
					<IconButton>
						<SaveOutlinedIcon />
					</IconButton>
				</div>
				{bookmarks ? (
					bookmarks.map((post, i) => (
						<SinglePost
							key={post._id}
							post={post}
							timePosted={moment(post.createdAt).fromNow()}
							delay={i}
							updateFeed={updateBookmarks}
							bookmarkHandler={bookmarkHandler}
						/>
					))
				) : (
					<LoadingPosts name="Bookmarks" />
				)}
				{bookmarks && bookmarks.length === 0 && (
					<div className="bookmarks__empty">
						<h2>No Bookmarks Saved</h2>
						<SaveOutlinedIcon
							fontSize="large"
							style={{ color: '#00b4d8', margin: ' 0 10px' }}
						/>
					</div>
				)}
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
