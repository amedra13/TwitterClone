import React, { useEffect } from 'react';
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
import * as actions from '../store/actions/index';

const TweetStatus = ({ user, tweet, comments, onSetStatus, onSetComments }) => {
	const { postId } = useParams();

	useEffect(() => {
		const getTweet = async () => {
			const response = await axios.get(
				`http://localhost:8080/status/${postId}`
			);
			onSetStatus(response.data.tweet);
		};
		getTweet();
	}, [onSetStatus, postId]);

	const updateComments = async () => {
		const response = await axios.get(
			`http://localhost:8080/tweetComments/${postId}`
		);
		onSetComments(response.data.tweetComments);
	};

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
							onClick={() => console.log(comments)}
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
				<Comments
					comments={comments}
					postId={postId}
					updateComments={updateComments}
				/>
			</div>
			<Trends />
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		user: state.main.user,
		tweet: state.tweet.statusTweet,
		comments: state.tweet.tweetComments,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSetStatus: (tweet) => dispatch(actions.setStatus(tweet)),
		onSetComments: (comments) => dispatch(actions.setTweetComments(comments)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(TweetStatus);
