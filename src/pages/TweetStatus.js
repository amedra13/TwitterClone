import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/mainPage/Sidebar';
import Trends from '../components/mainPage/Trend';
import { connect } from 'react-redux';
import Comments from '../components/Comments';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

const TweetStatus = ({ user }) => {
	const { postId } = useParams();
	const [tweet, setTweet] = useState(null);

	useEffect(() => {
		const getTweet = async () => {
			const response = await axios.get(
				`http://localhost:8080/status/${postId}`
			);
			setTweet(response.data.tweet);
		};
		getTweet();
	}, []);
	return (
		<div className="tweetStatus">
			<Sidebar username={user?.userName} userId={user?._id} />
			<div className="tweet">
				<div className="tweet__header">
					<div className="tweet__headerInfo">
						<Avatar>JT</Avatar>
						<div>
							<p>{tweet?.user.name}</p>
							<p>{tweet?.user.username}</p>
						</div>
					</div>
					<div className="message">
						<p>{tweet?.message}</p>
					</div>
					<p className="time">{tweet?.createdAt}</p>
					<div className="tweet__headerActivity">
						<p>{tweet?.retweets} Retweets</p>
						<p>{tweet?.favorite} Likes</p>
					</div>
					<div className="tweet__headerIcons">
						<ModeCommentOutlinedIcon
							style={{ color: 'rgba(136, 145, 150, 0.658)' }}
						/>
						<RepeatOutlinedIcon
							style={{ color: 'rgba(136, 145, 150, 0.658)' }}
						/>
						<FavoriteBorderOutlinedIcon
							style={{ color: 'rgba(136, 145, 150, 0.658)' }}
						/>
						<PublishOutlinedIcon
							style={{ color: 'rgba(136, 145, 150, 0.658)' }}
						/>
					</div>
				</div>
				<Comments comments={tweet?.comments} postId={postId} />
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
