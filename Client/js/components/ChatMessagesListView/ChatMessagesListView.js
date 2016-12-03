import React from "react";
import ChatMessageView from "../ChatMessageView";
import ThisUserChatMessageView from "../ThisUserChatMessageView";

export default class ChatMessagesListView extends React.Component {
    render() {
        const { appState } = this.props;
        const thisChatUserName = this.props.userName;
        let { chatMessages } = appState;
        
        let chatMessageViews = [];
        for(let i = 0; i < chatMessages.length; i++) {
            const chatMessage = chatMessages[i];
            if(chatMessage.chatUserName === thisChatUserName) {
                chatMessageViews.push(
                    <ThisUserChatMessageView 
                        key={chatMessage.chatMessageId}
                        ChatMessageId={chatMessage.chatMessageId}
                        ChatUserName={chatMessage.chatUserName}
                    >
                        {chatMessage.chatMessageText}
                    </ThisUserChatMessageView>
                );
            } else {
                chatMessageViews.push(
                    <ChatMessageView
                        key={chatMessage.chatMessageId}
                        ChatMessageId={chatMessage.chatMessageId}
                        ChatUserName={chatMessage.chatUserName}                    
                    >
                        {chatMessage.chatMessageText}
                    </ChatMessageView>
                );
            }
        }
        return (
            <div>{chatMessageViews}</div>
        );
    }
}