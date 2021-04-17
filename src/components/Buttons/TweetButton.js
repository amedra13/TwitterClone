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
		width: '75%',
		borderRadius: '28px',
		margin: '15px 0',
		fontSize: '12px',
	},
}));

const TweetButton = ({ withIcon, withQuery, clickFunction }) => {
	const classes = useStyles();
	console.log(withQuery);

	return (
		<Button
			onClick={clickFunction}
			className={classes.tweet}
			variant="contained"
			color="primary"
			size="large"
			type="submit"
			startIcon={withIcon && <SendIcon />}
		>
			Tweet
		</Button>
	);
};

export default TweetButton;
