export const loadConversation = (messages) => {
	return {
		type: 'LOAD_CONVERSATION',
		messageList: messages,
	};
};
