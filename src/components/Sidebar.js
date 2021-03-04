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
		fontStyle: 'italic',
		color: 'black',
		backgroundColor: 'white',
		'&:hover': {
			color: '#00b4d8',
			backgroundColor: 'rgba(243, 241, 241, 0.836)',
			boxShadow: 'none',
		},
		margin: '10px 0',
		boxShadow: 'none',
		width: '75%',
		borderRadius: '28px',
		transition: 'all 250ms ease-in-out',
		justifyContent: 'flex-start',
	},
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
	},
	twitterIcon: {
		color: '#00b4d8',
	},
}));

const Sidebar = () => {
	const classes = useStyles();
	return (
		<div className="sidebar">
			<div className="sidebar__logo">
				<IconButton className={classes.twitterIcon}>
					<TwitterIcon fontSize="large" />
				</IconButton>
			</div>
			<div className="sidebar__list">
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					startIcon={<HomeIcon />}
				>
					Home
				</Button>
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					startIcon={<PublicIcon />}
				>
					Explore
				</Button>
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					startIcon={<NotificationsNoneOutlinedIcon />}
				>
					Notifications
				</Button>
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					startIcon={<MailOutlinedIcon />}
				>
					Messages
				</Button>
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					startIcon={<BookmarkBorderOutlinedIcon />}
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
					startIcon={<AccountCircleOutlinedIcon />}
				>
					Profile
				</Button>
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					startIcon={<MoreHorizOutlinedIcon />}
				>
					More
				</Button>
			</div>
			<div className="sidebar__tweetButton">
				<Button
					className={classes.tweet}
					variant="contained"
					color="primary"
					size="large"
					startIcon={<SendIcon />}
				>
					Tweet
				</Button>
			</div>
		</div>
	);
};

export default Sidebar;
