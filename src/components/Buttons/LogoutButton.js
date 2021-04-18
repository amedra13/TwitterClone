import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	tweet: {
		color: 'white',
		backgroundColor: '#e5383b',
		'&:hover': {
			backgroundColor: '#e66063',
			boxShadow: 'none',
		},
		boxShadow: 'none',
		width: '90%',
		borderRadius: '28px',
		fontSize: '12px',
		fontWeight: 'bold',
		margin: '15px 0',
	},
}));

const LogoutButton = ({ minimize }) => {
	const logout = () => {
		console.log('Logging out!');
	};
	const classes = useStyles();
	return (
		<Button onClick={logout} className={classes.tweet} variant="contained">
			{!minimize ? <ExitToAppIcon /> : 'Logout'}
		</Button>
	);
};

export default LogoutButton;
