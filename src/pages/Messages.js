import React from 'react';
import { connect } from 'react-redux';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Sidebar from '../components/mainPage/Sidebar';
import MessageContainer from '../components/message/MessageContainer';
const Messages = ({ user }) => {
	return (
		<div className="messages">
			<Sidebar userId={user?._id} username={user?.userName} />
			<div className="messages__container">
				<div className="messages__list">
					<div className="messages__title">
						<h3>Messages</h3>
						<PostAddIcon fontSize="large" style={{ color: '#00b4d8' }} />
					</div>
					<MessageContainer />
					<MessageContainer />
					<MessageContainer />
					<MessageContainer />
					<MessageContainer />
					<MessageContainer />
				</div>
				<div className="messages__conversations">
					<div className="messages__empty">
						<h2>You Don't Have a Message Selected</h2>
						<p>Choose from Existing messages or start a new one</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.main.user,
	};
};

export default connect(mapStateToProps)(Messages);
