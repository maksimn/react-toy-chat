import { combineReducers } from 'redux';

const scriptElement = document.querySelector('script');      
const jsonChatMessages = scriptElement.getAttribute('data-chat-messages');

const initChatMessages = JSON.parse(jsonChatMessages);
const userName = scriptElement.getAttribute('data-userName');

function userNameReducer(state=userName, action) {
    return state;
}

function chatMessagesReducer(state=initChatMessages, action) {
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
    userName: userNameReducer,
    chatMessages: chatMessagesReducer
});

export default reducers;
