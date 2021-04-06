import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
// import axios from 'axios';
import { connect } from 'react-redux';

const Conversation = ({ user, messages }) => {
	const [newMessage, setNewMessage] = useState('');
	// const sendMessage = async (e) => {
	// 	e.preventDefault();
	// 	const response = await axios.post(
	// 		`http://localhost:8080/newChatMessage/${chatId}`,
	// 		{
	// 			message: newMessage,
	// 			username: user?.userName,
	// 		}
	// 	);
	// 	console.log(response.data.message);
	// 	setNewMessage('');
	// };
	return (
		<div className="conversation">
			<div>
				{messages?.map((singleMessage) => (
					<p key={singleMessage._id}>
						{singleMessage.username} wrote {singleMessage.content}
					</p>
				))}
			</div>
			<form>
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
		messages: state.messages.messages,
	};
};

export default connect(mapStateToProps)(Conversation);
