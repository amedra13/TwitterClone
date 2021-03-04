import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import PublicIcon from '@material-ui/icons/Public';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
	button: {
		color: 'white',
		backgroundColor: '#00b4d8',
		'&:hover': {
			color: 'white',
			backgroundColor: '#00b4d8',
			boxShadow: 'none',
		},
		margin: '15px',
		boxShadow: 'none',
		width: '75%',
		borderRadius: '28px',
		transition: 'all 200ms ease-in-out',
	},
	tweet: {
		color: 'white',
		backgroundColor: '#00b4d8',
		'&:hover': {
			backgroundColor: '#04758b',
			boxShadow: 'none',
		},
		boxShadow: 'none',
		height: '50px',
		width: '75%',
		borderRadius: '28px',
	},
	twitterIcon: {
		color: '#00b4d8',
	},
}));

const Sidebar = () => {
	const classes = useStyles();
	return (
		<div className="sidebar">
			{/* <div className="sidebar__logo"> */}
			<IconButton className={classes.twitterIcon}>
				<TwitterIcon fontSize="large" />
			</IconButton>
			{/* </div> */}
			<div className="sidebar__list">
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					startIcon={<HomeIcon fontSize="large" />}
				>
					Home
				</Button>
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					startIcon={<PublicIcon fontSize="large" />}
				>
					Explore
				</Button>
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					startIcon={<NotificationsNoneOutlinedIcon fontSize="large" />}
				>
					Notifications
				</Button>
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					startIcon={<MailOutlinedIcon fontSize="large" />}
				>
					Messages
				</Button>
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					startIcon={<BookmarkBorderOutlinedIcon fontSize="large" />}
				>
					BookMarks
				</Button>
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					startIcon={<ListAltOutlinedIcon />}
				>
					Lists
				</Button>
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					startIcon={<AccountCircleOutlinedIcon fontSize="large" />}
				>
					Profile
				</Button>
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					startIcon={<MoreHorizOutlinedIcon fontSize="large" />}
				>
					More
				</Button>
			</div>
			<div className="sidebar__tweetButton">
				<Button
					className={classes.tweet}
					variant="contained"
					color="primary"
					startIcon={<SendIcon fontSize="large" />}
				>
					Tweet
				</Button>
			</div>
		</div>
	);
};

export default Sidebar;
