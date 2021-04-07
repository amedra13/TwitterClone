import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import FriendSearch from '../message/FriendSearch';
import axios from 'axios';

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

const MessageModal = ({ isOpen, modalHandler, userId }) => {
	const [friendsList, setFriendsList] = useState(null);
	const classes = useStyles();

	useEffect(() => {
		const getFriends = async () => {
			const response = await axios.get(
				`http://localhost:8080/searchAllFriends/${userId}`
			);

			setFriendsList(response.data.friends);
		};
		if (isOpen) {
			getFriends();
		}
	}, [userId, isOpen]);

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
					<h3>Pick one of your friends to message.</h3>
					{friendsList?.map((friend) => (
						<FriendSearch person={friend} />
					))}
				</div>
			</Zoom>
		</Modal>
	);
};

export default MessageModal;
