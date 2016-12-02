import React from "react";

import ChatMessageInputForm from "./ChatMessageInputForm";
import ChatMessagesListView from "./ChatMessagesListView";

import { mockAppInitalizer, mockWebSocketEvents } from "../mocks/mocks";

export default class Layout extends React.Component {
    constructor() {
        super();
        mockAppInitalizer(this.initState.bind(this));
        mockWebSocketEvents(this.handleChatMessage.bind(this));
    }

    initState(jsonResult) {
        const chatData = JSON.parse(jsonResult);

        this.state = { 
            chatUserName: chatData.ThisUser.Name, 
            chatMessages: chatData.ChatMessages 
        };
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
