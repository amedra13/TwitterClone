import React, { useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import TweetLoader from './TweetLoader';
import { makeStyles } from '@material-ui/core/styles';

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
	button: {
		width: '100px',
		height: '50px',
		margin: '0 40px',
		color: 'white',
	},
	delete: {
		backgroundColor: 'rgb(233, 40, 88)',
		'&:hover': {
			backgroundColor: 'white',
			color: 'rgb(233, 40, 88)',
			border: '1px solid rgb(233, 40, 88)',
		},
	},
	cancel: {
		backgroundColor: '#00b4d8',
		'&:hover': {
			backgroundColor: 'white',
			color: '#00b4d8',
			border: '1px solid #00b4d8',
		},
	},
}));

const DeleteModal = ({ isOpen, modalHandler, deleteFunction }) => {
	const classes = useStyles();
	const [isLoading, setIsLoading] = useState(false);

	const deletingAccount = () => {
		setIsLoading(true);
		deleteFunction();
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
					<div className="deleteModal__header">
						<h4>Are you sure you want to delete your Account?</h4>
					</div>

					{isLoading ? (
						<TweetLoader />
					) : (
						<div className="deleteModal__body">
							<Button
								onClick={() => deletingAccount()}
								className={`${classes.button} ${classes.delete}`}
							>
								Yes
							</Button>
							<Button
								onClick={() => modalHandler()}
								className={`${classes.button} ${classes.cancel}`}
							>
								No
							</Button>
						</div>
					)}
				</div>
			</Zoom>
		</Modal>
	);
};

export default DeleteModal;
