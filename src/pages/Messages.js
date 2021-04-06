import React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Sidebar from '../components/mainPage/Sidebar';
import MessageContainer from '../components/message/MessageContainer';
import Conversation from '../components/message/Conversation';
import axios from 'axios';
import * as actions from '../store/actions/index';

const Messages = ({ user, messages, onLoadConversation }) => {
	const createRoom = async () => {
		const response = await axios.post('http://localhost:8080/createRoom', {
			userId: user._id,
		});
		console.log(response.data.message);
	};

	const loadConversation = async (id) => {
		const response = await axios.get(
			`http://localhost:8080/loadConversation/${id}`
		);
		console.log(response.data.messsages);
		onLoadConversation(response.data.messages);
	};
	return (
		<div className="messages">
			<Sidebar userId={user?._id} username={user?.userName} />
			<div className="messages__container">
				<div className="messages__list">
					<div className="messages__title">
						<h3>Messages</h3>
						<IconButton onClick={createRoom}>
							<PostAddIcon fontSize="large" style={{ color: '#00b4d8' }} />
						</IconButton>
					</div>
					<MessageContainer
						clickFunction={() => loadConversation('606bb10960227f419cc65224')}
					/>
					<MessageContainer />
					<MessageContainer />
					<MessageContainer />
					<MessageContainer />
					<MessageContainer />
				</div>
				<div className="messages__conversations">
					<Conversation messages={messages} />
					{/* <div className="messages__empty">
						<h2>You Don't Have a Message Selected</h2>
						<p>Choose from Existing messages or start a new one</p>
					</div> */}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.main.user,
		messages: state.messages.messages,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoadConversation: (messages) =>
			dispatch(actions.loadConversation(messages)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
