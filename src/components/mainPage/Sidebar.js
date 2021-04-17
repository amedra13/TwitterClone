import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ListButton from '../Buttons/ListButton';
import TweetButton from '../Buttons/TweetButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { connect } from 'react-redux';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import TweetModal from '../Modals/TweetModal';

const Sidebar = ({ user }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const matches = useMediaQuery('(min-width:1100px)');

	const modalHandler = () => {
		setIsOpen(!isOpen);
	};

	const sidebarHeader = matches ? (
		<div>
			<IconButton style={{ color: '#00b4d8' }}>
				<TwitterIcon fontSize="large" />
			</IconButton>
			{user?.userName}
		</div>
	) : (
		<IconButton
			onClick={() => setMenuOpen(!menuOpen)}
			style={{ color: '#00b4d8' }}
		>
			<MenuIcon fontSize="large" />
		</IconButton>
	);

	return (
		<div className={`sidebar ${menuOpen && 'activeMenu'}`}>
			<div className="sidebarContainer">
				<div className="sidebar__logo">{sidebarHeader}</div>
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
					<TweetButton
						withIcon
						withQuery={matches}
						clickFunction={modalHandler}
					/>
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
