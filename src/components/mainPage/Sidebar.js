import React from 'react';
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

const Sidebar = ({ username, userId }) => {
	return (
		<div className="sidebar">
			<div className="sidebarContainer">
				<div className="sidebar__logo">
					<IconButton style={{ color: '#00b4d8' }}>
						<TwitterIcon fontSize="large" />
					</IconButton>
					{username}
				</div>
				<div className="sidebar__list">
					<ListButton
						listItem="Home"
						IconComponent={HomeIcon}
						userId={userId}
					/>
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
						userId={userId}
					/>
					<ListButton listItem="More" IconComponent={MoreHorizOutlinedIcon} />
				</div>
				<div className="sidebar__tweetButton">
					<TweetButton withIcon />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
