import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
	tweet: {
		color: 'white',
		backgroundColor: '#00b4d8',
		'&:hover': {
			backgroundColor: '#0accf3c4',
			boxShadow: 'none',
		},
		boxShadow: 'none',
		width: '90%',
		borderRadius: '28px',
		fontSize: '12px',
		margin: '15px 0',
	},
}));

const TweetButton = ({ withIcon, withQuery, clickFunction }) => {
	const classes = useStyles();

	return (
		<Button
			onClick={clickFunction}
			className={classes.tweet}
			variant="contained"
			color="primary"
			type="submit"
		>
			{!withQuery ? <SendIcon /> : 'tweet'}
		</Button>
	);
};

export default TweetButton;
