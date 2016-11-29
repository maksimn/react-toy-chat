import React from "react";
import ChatMessageInputForm from "./components/ChatMessageInputForm";
import ChatMessagesListView from "./components/ChatMessagesListView";

export default class Layout extends React.Component {
    handleChatMessage(msgObj) {
        const newId = this.state.chatMessages.length;
        this.setState({
            chatUserName: this.state.chatUserName,
            chatMessages: this.state.chatMessages.concat({
                chatMessageId: newId,
                chatUserName: msgObj.chatUserName,
                chatMessageText: msgObj.chatMessageText
            })
        });
    }

    render() {
        return (
            <div>
                <ChatMessageInputForm addChatMessage={this.handleChatMessage.bind(this)} />
                <ChatMessagesListView appState={this.state} />
            </div>
        );
    }
}
