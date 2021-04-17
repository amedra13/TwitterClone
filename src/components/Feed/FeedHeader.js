import React, { useState } from 'react';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import TweetButton from '../Buttons/TweetButton';
import TweetLoader from '../Modals/TweetLoader';
import { connect } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FlareIcon from '@material-ui/icons/Flare';
import Avatar from '@material-ui/core/Avatar';
import CropOriginalOutlinedIcon from '@material-ui/icons/CropOriginalOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import * as actions from '../../store/actions/index';

const useStyles = makeStyles((theme) => ({
	feedIcon: {
		margin: '0 3px',
		color: '#00b4d8',
	},
}));

const FeedHeader = ({ userId, onUpdateFeedPosts }) => {
	const classes = useStyles();
	const [newTweet, setNewTweet] = useState('');
	const [loading, setIsLoading] = useState(false);
	const matches = useMediaQuery('(min-width:700px)');

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		if (newTweet.length === 0) {
			return;
		}
		setIsLoading(true);
		try {
			await axios.post('http://localhost:8080/tweet', {
				message: newTweet,
				userId: userId,
			});
			const feedResponse = await axios.get(
				`http://localhost:8080/updateFeed/${userId}`
			);

			onUpdateFeedPosts(feedResponse.data.allPosts);
			setNewTweet('');
			setIsLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="feedHeader">
			<div className="feedHeader__title">
				<h4>Home</h4>
				<IconButton style={{ color: '#00b4d8' }}>
					<FlareIcon fontSize="large" />
				</IconButton>
			</div>
			<div className="feedHeader__form">
				<div className="avatarContainer">
					<Avatar>AM</Avatar>
				</div>
				{loading ? (
					<TweetLoader />
				) : (
					<form onSubmit={onSubmitHandler}>
						<div className="formContainer">
							<input
								type="text"
								placeholder="What's Happening?"
								value={newTweet}
								onChange={(e) => setNewTweet(e.target.value)}
							/>
							<div>
								<CropOriginalOutlinedIcon className={classes.feedIcon} />
								<GifOutlinedIcon className={classes.feedIcon} />
								<InsertChartOutlinedIcon className={classes.feedIcon} />
								<SentimentSatisfiedOutlinedIcon className={classes.feedIcon} />
							</div>
						</div>
						<div className="tweetContainer">
							<TweetButton withIcon withQuery={matches} />
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUpdateFeedPosts: (updatedPosts) =>
			dispatch(actions.updateFeedPosts(updatedPosts)),
	};
};

export default connect(null, mapDispatchToProps)(FeedHeader);
