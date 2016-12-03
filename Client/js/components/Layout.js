import React from "react";
import { connect } from "react-redux"

import ChatMessageInputForm from "./ChatMessageInputForm";
import ChatMessagesListView from "./ChatMessagesListView";

import { mockWebSocketMessages } from "../mocks/mocks";

export class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(mockWebSocketMessages());
    }

    handleChatMessage(msgObj) {
        this.props.dispatch({ type: "CHAT_MESSAGE_RECEIVED", payload: msgObj })
    }

    render() {
        const chatUserName = this.props.userName;
        return (
            <div>
                <ChatMessageInputForm userName={chatUserName} 
                                      addChatMessage={this.handleChatMessage.bind(this)} />
                <ChatMessagesListView userName={chatUserName}
                                      appState={this.props} />
            </div>
        );
    }
}

export default connect((store) => {
    return {
        userName: store.userName,
        chatMessages: store.chatMessages
    };
})(Layout);