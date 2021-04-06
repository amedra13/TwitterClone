const initialState = {
	messages: null,
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_CONVERSATION':
			return { ...state, messages: action.messageList };

		default:
			return state;
	}
};

export default messagesReducer;
