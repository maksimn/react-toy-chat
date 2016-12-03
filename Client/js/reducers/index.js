import { combineReducers } from 'redux';

function chatMessagesReducer(state=[], action) {
    if (action.type === "CHAT_MESSAGE_RECEIVED") {
        const newId = state.length;
        const newChatMessage = {
            chatMessageId: newId,
            chatUserName: action.payload.chatUserName,
            chatMessageText: action.payload.chatMessageText
        }
        return [...state, newChatMessage];
    }
    return state;
}

const reducers = combineReducers({
    chatMessages: chatMessagesReducer
});

export default reducers;
