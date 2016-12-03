import React from "react";
import { connect } from "react-redux"

import { userName, chatMessages } from "../appConstants";
import ChatMessageInputForm from "./ChatMessageInputForm";
import ChatMessagesListView from "./ChatMessagesListView";

import { mockWebSocketMessages } from "../mocks/mocks";

export class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(mockWebSocketMessages());
        
        for(let i = 0; i < chatMessages.length; i++) {
            this.props.dispatch({ type: "CHAT_MESSAGE_RECEIVED", payload: chatMessages[i] });
        }
    }

    handleChatMessage(msgObj) {
        this.props.dispatch({ type: "CHAT_MESSAGE_RECEIVED", payload: msgObj })
    }

    render() {
        return (
            <div>
                <ChatMessageInputForm userName={userName} 
                                      addChatMessage={this.handleChatMessage.bind(this)} />
                <ChatMessagesListView userName={userName}
                                      appState={this.props} />
            </div>
        );
    }
}

export default connect((store) => {
    return {
        chatMessages: store.chatMessages
    };
})(Layout);