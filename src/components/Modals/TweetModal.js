import React, { useState } from 'react';
import Zoom from '@material-ui/core/Zoom';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import TweetButton from '../Buttons/TweetButton';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import CropOriginalOutlinedIcon from '@material-ui/icons/CropOriginalOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import axios from 'axios';
import TweetLoader from './TweetLoader';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		height: '250px',
		width: '600px',
		outline: 'none',
		borderRadius: '10px',
		padding: theme.spacing(2, 4, 3),
	},
	feedIcon: {
		margin: '0 3px',
		color: '#00b4d8',
	},
	closeIcon: {
		color: '#00b4d8',
	},
}));

const TweetModal = ({ isOpen, modalHandler, username, userId }) => {
	const [newTweet, setNewTweet] = useState('');
	const [loading, setLoading] = useState(false);
	const classes = useStyles();

	const tweetButton = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			await axios.post('http://localhost:8080/tweet', {
				message: newTweet,
				userId: userId,
			});
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
					{loading ? (
						<div className="tweetLoader__container">
							<TweetLoader />
						</div>
					) : (
						<div className="tweetModal__body">
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
									<TweetButton clickFunction={tweetButton} />
								</div>
							</div>
						</div>
					)}
				</div>
			</Zoom>
		</Modal>
	);
};

export default TweetModal;
