import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import axios from 'axios';
import { connect } from 'react-redux';

const Conversation = ({ user, messages, chatId, friend, updateMessages }) => {
	const [newMessage, setNewMessage] = useState('');
	const sendMessage = async (e) => {
		e.preventDefault();
		await axios.post(`http://localhost:8080/newChatMessage/${chatId}`, {
			message: newMessage,
			username: user?.userName,
		});
		updateMessages(chatId, friend);
		setNewMessage('');
	};
	return (
		<div className="conversation">
			<div className="conversation__title">
				<IconButton>
					<SendOutlinedIcon />
				</IconButton>
				<Avatar
					style={{ margin: '0 10px' }}
					src={`http://localhost:8080/${friend?.profileImage}`}
				/>
				<div className="conversation__otherUser">
					<h4>{friend?.name}</h4>
					<p>{friend?.userName}</p>
				</div>
			</div>
			<div className="conversation__messages">
				{messages?.map((singleMessage) => {
					let isUser = singleMessage.username === user?.userName;

					return (
						<div
							key={singleMessage._id}
							className={`message ${isUser && 'userMessage'}`}
						>
							{singleMessage.content}
						</div>
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
