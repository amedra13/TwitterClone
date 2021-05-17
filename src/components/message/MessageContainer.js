import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

const MessageContainer = ({
	chatId,
	otherUser,
	lastUpdate,
	chat,
	minimize,
	clickFunction,
}) => {
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

	const messageSection = minimize ? (
		<>
			<div className="messageContainer__content">
				<p>
					<span className="bold">{friend?.name}</span> {friend?.userName}
				</p>
				<p>{lastUpdate}</p>
			</div>
		</>
	) : null;

	const print = () => {
		console.log(chat);
	};

	return (
		<div
			className="messageContainer"
			onClick={() => {
				print();
				return clickFunction(chatId, friend);
			}}
		>
			<Avatar src={friend && `http://localhost:8080/${friend.profileImage}`} />
			{messageSection}
		</div>
	);
};

export default MessageContainer;
