import React, { useEffect } from 'react';
import SideBar from '../components/mainPage/Sidebar';
import Feed from '../components/mainPage/Feed';
import Trend from '../components/mainPage/Trend';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
const MainPage = ({ onLoadUser, user, feedPosts }) => {
	const userId = localStorage.getItem('userId');

	useEffect(() => {
		console.log(userId);
		const getUserAndFeed = async () => {
			try {
				const profile = await axios.get(`http://localhost:8080/home/${userId}`);
				onLoadUser(profile.data.user, profile.data.allPosts);
			} catch (err) {
				console.log(err);
			}
		};

		getUserAndFeed();
	}, [userId, onLoadUser]);

	return (
		<div className="mainPage">
			<SideBar />
			<Feed userId={user?._id} posts={feedPosts} />
			<Trend />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.main.user,
		feedPosts: state.main.feedPosts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoadUser: (user, posts) => dispatch(actions.loadUser(user, posts)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
