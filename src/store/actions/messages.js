export const loadConversation = (messages, id) => {
	return {
		type: 'LOAD_CONVERSATION',
		messageList: messages,
		chatId: id,
	};
};

export const loadChatLists = (list) => {
	return {
		type: 'LOAD_ALL_CHATS',
		chatList: list,
	};
};
