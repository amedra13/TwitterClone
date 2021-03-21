import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/mainPage/Sidebar';
import Trends from '../components/mainPage/Trend';
import { connect } from 'react-redux';

const TweetStatus = ({ user }) => {
	const { postId } = useParams();
	return (
		<div className="tweetStatus">
			<Sidebar username={user?.userName} userId={user?._id} />
			<div className="tweet">
				<h1>Tweet Component</h1>
				<h4>PostID = {postId}</h4>
			</div>
			<Trends />
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// onSetProfile: (user, posts) => dispatch(actions.setProfile(user, posts)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(TweetStatus);
