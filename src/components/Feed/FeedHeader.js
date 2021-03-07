import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import TweetButton from '../Buttons/TweetButton';

import FlareIcon from '@material-ui/icons/Flare';
import Avatar from '@material-ui/core/Avatar';
import CropOriginalOutlinedIcon from '@material-ui/icons/CropOriginalOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

const useStyles = makeStyles((theme) => ({
	feedIcon: {
		margin: '0 3px',
		color: '#00b4d8',
	},
}));

const FeedHeader = () => {
	const classes = useStyles();
	const [newTweet, setNewTweet] = useState('');

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(newTweet);
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
				<div className="formContainer">
					<input
						type="text"
						placeholder="What's Happening?"
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
					<TweetButton click={onSubmitHandler} />
				</div>
			</div>
		</div>
	);
};

export default FeedHeader;
