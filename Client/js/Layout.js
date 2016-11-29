import React from "react";
import ChatMessageInputForm from "./components/ChatMessageInputForm";
import ChatMessagesListView from "./components/ChatMessagesListView";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { chatUserName: "Гость1", chatMessages: [] };
    }
    handleChatMessage(msgObj) {
        const newMsg = {
            chatMessageId: this.state.chatMessages.length,
            chatUserName: msgObj.chatUserName,
            chatMessageText: msgObj.chatMessageText
        };
        this.setState({
            chatUserName: this.state.chatUserName,
            chatMessages: [...this.state.chatMessages, newMsg]
        });
    }

    render() {
        return (
            <div>
                <ChatMessageInputForm userName={this.state.chatUserName} 
                                      addChatMessage={this.handleChatMessage.bind(this)} />
                <ChatMessagesListView appState={this.state} />
            </div>
        );
    }
}
