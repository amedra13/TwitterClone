import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ListButton from '../Buttons/ListButton';
import TweetButton from '../Buttons/TweetButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import TweetModal from '../Modals/TweetModal';

const Sidebar = ({ username, userId, user }) => {
	const [isOpen, setIsOpen] = useState(false);

	const modalHandler = () => {
		setIsOpen(!isOpen);
	};
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
					<ListButton
						listItem="Notifications"
						IconComponent={NotificationsNoneOutlinedIcon}
					/>
					<ListButton listItem="Messages" IconComponent={MailOutlinedIcon} />
					<ListButton
						listItem="BookMarks"
						IconComponent={BookmarkBorderOutlinedIcon}
						userId={userId}
					/>
					<ListButton
						listItem="Lists"
						IconComponent={ListAltOutlinedIcon}
						userId={userId}
					/>
					<ListButton
						listItem="Profile"
						IconComponent={AccountCircleOutlinedIcon}
						username={username}
					/>
					<ListButton
						listItem="More"
						IconComponent={MoreHorizOutlinedIcon}
						userId={userId}
					/>
				</div>
				<div className="sidebar__tweetButton">
					<TweetButton withIcon clickFunction={modalHandler} />
				</div>
				<TweetModal
					isOpen={isOpen}
					modalHandler={modalHandler}
					username={username}
					userId={userId}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
