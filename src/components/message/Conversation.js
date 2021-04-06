import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import axios from 'axios';
import { connect } from 'react-redux';

const Conversation = ({ user, messages, chatId, updateMessages }) => {
	const [newMessage, setNewMessage] = useState('');
	const sendMessage = async (e) => {
		e.preventDefault();
		await axios.post(`http://localhost:8080/newChatMessage/${chatId}`, {
			message: newMessage,
			username: user?.userName,
		});
		updateMessages(chatId);
		setNewMessage('');
	};
	return (
		<div className="conversation">
			<div className="covsersation__messages">
				{messages?.map((singleMessage) => {
					let isUser = singleMessage.username === user?.userName;

					return (
						// <div
						// 	className={`message ${isUser && 'userMessage'}`}
						// 	key={singleMessage._id}
						// >
						// 	<p className="message__username">{singleMessage.username}</p>
						// 	<p className="message__content">{singleMessage.content}</p>
						// </div>
						<p
							className={`message ${isUser && 'userMessage'}`}
							key={singleMessage._id}
						>
							<span> {singleMessage.username}</span>
							{singleMessage.content}
						</p>
					);
				})}
			</div>
			<form onSubmit={sendMessage}>
				<input
					type="text"
					placeholder="Type here ...."
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
				/>
				<IconButton type="submit" className="sendIcon">
					<SendOutlinedIcon />
				</IconButton>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.main.user,
	};
};

export default connect(mapStateToProps)(Conversation);
