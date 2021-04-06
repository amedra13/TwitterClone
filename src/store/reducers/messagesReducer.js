const initialState = {
	chatIds: null,
	activeChatRoom: null,
	activeFriend: null,
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_CONVERSATION':
			return {
				...state,
				activeChatRoom: action.chatRoom,
				activeFriend: action.friend,
			};
		case 'LOAD_ALL_CHATS':
			return { ...state, chatIds: action.chatList };

		default:
			return state;
	}
};

export default messagesReducer;
