import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	button: {
		color: '#00b4d8',
		margin: '10px',
		fontWeight: 'bold',
		border: '1px solid #00b4d8',
		borderRadius: '30px',
		padding: '10px',
		'&:hover': {
			backgroundColor: '#b0f1ff77',
		},
	},
	isFollowing: {
		backgroundColor: '#00b4d8',
		color: 'white',
	},
	hidden: {
		visibility: 'hidden',
	},
}));

const FollowButton = ({ isUser, isFollowing, toggleFollow }) => {
	const classes = useStyles();

	return (
		<Button
			onClick={() => toggleFollow()}
			className={`${classes.button} ${isUser && classes.hidden} ${
				isFollowing && classes.isFollowing
			}`}
		>
			{isFollowing ? 'Following' : 'Follow'}
		</Button>
	);
};

export default FollowButton;
