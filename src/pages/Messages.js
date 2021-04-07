import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Sidebar from '../components/mainPage/Sidebar';
import MessageContainer from '../components/message/MessageContainer';
import Conversation from '../components/message/Conversation';
import axios from 'axios';
import MessageModal from '../components/Modals/MessageModal';
import * as actions from '../store/actions/index';

const Messages = ({
	user,
	chatIds,
	chatRoom,
	friend,
	onLoadConversation,
	onLoadList,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const modalHandler = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const getList = async () => {
			const response = await axios.get(
				`http://localhost:8080/allChats/${user?._id}`
			);
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

	const loadConversation = async (chatId, friend) => {
		const response = await axios.get(
			`http://localhost:8080/loadConversation/${chatId}`
		);
		onLoadConversation(response.data.chatRoom, friend);
	};
	return (
		<div className="messages">
			<Sidebar userId={user?._id} username={user?.userName} />
			<div className="messages__container">
				<div className="messages__list">
					<div className="messages__title">
						<h3>Messages</h3>
						<IconButton onClick={modalHandler}>
							<PostAddIcon fontSize="large" style={{ color: '#00b4d8' }} />
						</IconButton>
					</div>
					{chatIds?.map((chat) => (
						<MessageContainer
							key={chat._id}
							chatId={chat._id}
							otherUser={chat.users[0]}
							clickFunction={loadConversation}
						/>
					))}
				</div>
				<div className="messages__conversations">
					{chatRoom ? (
						<Conversation
							messages={chatRoom?.messages}
							chatId={chatRoom?._id}
							friend={friend}
							updateMessages={loadConversation}
						/>
					) : (
						<div className="messages__empty">
							<h2>You Don't Have a Message Selected</h2>
							<p>Choose from Existing messages or start a new one</p>
						</div>
					)}
				</div>
			</div>
			<MessageModal
				isOpen={isOpen}
				modalHandler={modalHandler}
				// username={username}
				userId={user?._id}
			/>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.main.user,
		chatIds: state.messages.chatIds,
		chatRoom: state.messages.activeChatRoom,
		friend: state.messages.activeFriend,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoadConversation: (room, friend) =>
			dispatch(actions.loadConversation(room, friend)),
		onLoadList: (list) => dispatch(actions.loadChatLists(list)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
