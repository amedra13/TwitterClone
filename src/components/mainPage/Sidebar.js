import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ListButton from '../Buttons/ListButton';
import TweetButton from '../Buttons/TweetButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import { connect } from 'react-redux';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import TweetModal from '../Modals/TweetModal';

const Sidebar = ({ user }) => {
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
					{user?.userName}
				</div>
				<div className="sidebar__list">
					<ListButton
						listItem="Home"
						IconComponent={HomeIcon}
						userId={user?._id}
					/>

					<ListButton
						listItem="Messages"
						IconComponent={MailOutlinedIcon}
						userId={user?._id}
					/>
					<ListButton
						listItem="BookMarks"
						IconComponent={BookmarkBorderOutlinedIcon}
						userId={user?._id}
					/>
					<ListButton
						listItem="Lists"
						IconComponent={ListAltOutlinedIcon}
						userId={user?._id}
					/>
					<ListButton
						listItem="Profile"
						IconComponent={AccountCircleOutlinedIcon}
						username={user?.userName}
					/>
					<ListButton
						listItem="More"
						IconComponent={MoreHorizOutlinedIcon}
						userId={user?._id}
					/>
				</div>
				<div className="sidebar__tweetButton">
					<TweetButton withIcon clickFunction={modalHandler} />
				</div>
				<TweetModal
					isOpen={isOpen}
					modalHandler={modalHandler}
					username={user?.userName}
					userId={user?._id}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.main.user,
	};
};

export default connect(mapStateToProps)(Sidebar);
