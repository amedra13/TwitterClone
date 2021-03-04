import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ListButton from '../Buttons/ListButton';
import TweetButton from '../Buttons/TweetButton';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import PublicIcon from '@material-ui/icons/Public';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const useStyles = makeStyles((theme) => ({
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
				<ListButton listItem="Home" IconComponent={HomeIcon} />
				<ListButton listItem="Explore" IconComponent={PublicIcon} />
				<ListButton
					listItem="Notifications"
					IconComponent={NotificationsNoneOutlinedIcon}
				/>
				<ListButton listItem="Messages" IconComponent={MailOutlinedIcon} />
				<ListButton
					listItem="BookMarks"
					IconComponent={BookmarkBorderOutlinedIcon}
				/>
				<ListButton listItem="Lists" IconComponent={ListAltOutlinedIcon} />
				<ListButton
					listItem="Profile"
					IconComponent={AccountCircleOutlinedIcon}
				/>
				<ListButton listItem="More" IconComponent={MoreHorizOutlinedIcon} />
			</div>
			<div className="sidebar__tweetButton">
				<TweetButton />
			</div>
		</div>
	);
};

export default Sidebar;
