import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

const MessageContainer = ({ chatId, otherUser, clickFunction }) => {
	const [friend, setFriend] = useState(null);
	useEffect(() => {
		const loadOtherUser = async () => {
			const response = await axios.get(
				`http://localhost:8080/otherUser/${otherUser}`
			);
			setFriend(response.data.friend);
		};
		loadOtherUser();
	}, [otherUser]);
	return (
		<div
			className="messageContainer"
			onClick={() => clickFunction(chatId, friend)}
		>
			<Avatar
				style={{
					margin: '10px',
					alignSelf: 'center',
					width: '60px',
					height: '60px',
				}}
			/>
			<div className="messageContainer__content">
				<p>
					<span className="bold">{friend?.name}</span> {friend?.userName}
				</p>
				<p>Messagin sneek preview</p>
			</div>
			<p style={{ margin: '10px' }}>Time</p>
		</div>
	);
};

export default MessageContainer;
