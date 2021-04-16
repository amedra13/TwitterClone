import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/mainPage/Sidebar';
import Trends from '../components/mainPage/Trend';
import { connect } from 'react-redux';
import moment from 'moment';
import Comments from '../components/Comments';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
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

	const userLikes = tweet?.favorite.includes(user._id);
	const userSaved = tweet?.saved.includes(user._id);
	const favorited = userLikes ? '#ff99ac' : 'rgba(136, 145, 150, 0.658)';
	const saved = userSaved ? '#38b000' : 'rgba(136, 145, 150, 0.658)';

	return (
		<div className="tweetStatus">
			<Sidebar />
			<div className="tweet">
				<div className="tweet__header">
					<div className="tweet__headerInfo">
						<Avatar>JT</Avatar>
						<div>
							<p>{tweet?.creator.name}</p>
							<p>{tweet?.creator.username}</p>
						</div>
					</div>
					<div className="message">
						<p>{tweet?.message}</p>
					</div>
					<p className="time">
						{moment(tweet?.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}
					</p>
					<div className="tweet__headerActivity">
						<p>{tweet?.retweets} Retweets</p>
						<p>{tweet?.favorite.length} Likes</p>
					</div>
					<div className="tweet__headerIcons">
						<ModeCommentOutlinedIcon
							style={{ color: 'rgba(136, 145, 150, 0.658)' }}
							onClick={() => console.log(comments)}
						/>
						<RepeatOutlinedIcon
							style={{ color: 'rgba(136, 145, 150, 0.658)' }}
						/>
						<FavoriteIcon style={{ color: `${favorited}` }} />
						<BookmarkBorderOutlinedIcon style={{ color: `${saved}` }} />
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
