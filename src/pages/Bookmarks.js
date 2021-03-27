import React, { useState, useEffect } from 'react';
import SideBar from '../components/mainPage/Sidebar';
// import SinglePost from '../components/Feed/SinglePost';
import Trend from '../components/mainPage/Trend';
import { connect } from 'react-redux';
import axios from 'axios';

const Bookmarks = ({ user }) => {
	const [posts, setPosts] = useState(null);
	useEffect(() => {
		const getBookmarks = async () => {
			const results = await axios.get(
				`http://localhost:8080/bookmarks/${user._id}`
			);
			setPosts(results.data.posts);
		};
		getBookmarks();
	}, [user]);

	return (
		<div className="bookmarks">
			<SideBar username={user?.userName} userId={user?._id} />
			<div className="bookmarks__posts">
				<h1>Saved Posts from users</h1>
				{posts}
			</div>
			<Trend />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.main.user,
	};
};

export default connect(mapStateToProps)(Bookmarks);
