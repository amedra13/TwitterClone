import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Sidebar from '../components/mainPage/Sidebar';
import MessageContainer from '../components/message/MessageContainer';
import Conversation from '../components/message/Conversation';
import axios from 'axios';
import * as actions from '../store/actions/index';

const Messages = ({
	user,
	messages,
	chatIds,
	activeChat,
	onLoadConversation,
	onLoadList,
}) => {
	useEffect(() => {
		const getList = async () => {
			const response = await axios.get(
				`http://localhost:8080/allChats/${user?._id}`
			);
			console.log(response.data.message);
			onLoadList(response.data.list);
		};
		getList();
	}, [user, onLoadList]);

	const createRoom = async () => {
		const response = await axios.post('http://localhost:8080/createRoom', {
			userId: user._id,
		});
		console.log(response.data.message);
	};

	const loadConversation = async (chatId) => {
		const response = await axios.get(
			`http://localhost:8080/loadConversation/${chatId}`
		);
		onLoadConversation(response.data.messages, chatId);
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
					{chatIds?.map((chat) => (
						<MessageContainer
							key={chat._id}
							clickFunction={() => loadConversation(chat._id)}
						/>
					))}
				</div>
				<div className="messages__conversations">
					<Conversation
						messages={messages}
						chatId={activeChat}
						updateMessages={loadConversation}
					/>
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
		chatIds: state.messages.chatIds,
		activeChat: state.messages.activeChat,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoadConversation: (messages, id) =>
			dispatch(actions.loadConversation(messages, id)),
		onLoadList: (list) => dispatch(actions.loadChatLists(list)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
