import React, { useState } from 'react';
import Zoom from '@material-ui/core/Zoom';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import TweetButton from '../Buttons/TweetButton';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import CropOriginalOutlinedIcon from '@material-ui/icons/CropOriginalOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import axios from 'axios';
import TweetLoader from './TweetLoader';
import * as actions from '../../store/actions/index';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		height: '250px',
		width: '45vw',
		maxWidth: '800px',
		minWidth: '480px',
		outline: 'none',
		borderRadius: '10px',
		padding: theme.spacing(2, 4, 3),
	},
	feedIcon: {
		margin: '0 3px',
		color: '#00b4d8',
	},
}));

const TweetModal = ({
	isOpen,
	modalHandler,
	username,
	userId,
	onUpdateFeed,
}) => {
	const [newTweet, setNewTweet] = useState('');
	const [loading, setLoading] = useState(false);
	const classes = useStyles();

	const tweetButton = async (e) => {
		e.preventDefault();
		if (newTweet.length === 0) {
			return;
		}
		setLoading(true);
		try {
			await axios.post('http://localhost:8080/tweet', {
				message: newTweet,
				userId: userId,
			});
			const feedResponse = await axios.get(
				`http://localhost:8080/updateFeed/${userId}`
			);

			onUpdateFeed(feedResponse.data.allPosts);
			setNewTweet('');
			setLoading(false);
			modalHandler();
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={isOpen}
			onClose={modalHandler}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Zoom in={isOpen}>
				<div className={classes.paper}>
					<div className="tweetModal__header">
						<h4>{username}</h4>
						<IconButton className={classes.closeIcon} onClick={modalHandler}>
							<HighlightOffOutlinedIcon fontSize="large" />
						</IconButton>
					</div>

					<div className="tweetModal__body">
						{loading ? (
							<TweetLoader />
						) : (
							<form onSubmit={tweetButton}>
								<input
									type="text"
									placeholder="What's Happening?"
									value={newTweet}
									onChange={(e) => setNewTweet(e.target.value)}
								/>
								<div className="tweetModal__bottomContainer">
									<div>
										<CropOriginalOutlinedIcon className={classes.feedIcon} />
										<GifOutlinedIcon className={classes.feedIcon} />
										<InsertChartOutlinedIcon className={classes.feedIcon} />
										<SentimentSatisfiedOutlinedIcon
											className={classes.feedIcon}
										/>
									</div>
									<div className="tweetModal__button">
										<TweetButton clickFunction={tweetButton} withQuery />
									</div>
								</div>
							</form>
						)}
					</div>
				</div>
			</Zoom>
		</Modal>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUpdateFeed: (updatedPosts) =>
			dispatch(actions.updateFeedPosts(updatedPosts)),
	};
};

export default connect(null, mapDispatchToProps)(TweetModal);
