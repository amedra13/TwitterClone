const initialState = {
	chatIds: null,
	activeChat: null,
	messages: null,
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_CONVERSATION':
			return {
				...state,
				messages: action.messageList,
				activeChat: action.chatId,
			};
		case 'LOAD_ALL_CHATS':
			return { ...state, chatIds: action.chatList };

		default:
			return state;
	}
};

export default messagesReducer;
