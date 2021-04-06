export const loadConversation = (room, friend) => {
	return {
		type: 'LOAD_CONVERSATION',
		chatRoom: room,
		friend: friend,
	};
};

export const loadChatLists = (list) => {
	return {
		type: 'LOAD_ALL_CHATS',
		chatList: list,
	};
};
