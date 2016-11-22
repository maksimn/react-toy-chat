import React from "react";
import ChatMessageView from "./ChatMessageView";
import ThisUserChatMessageView from "./ThisUserChatMessageView";

export default class ChatMessagesListView extends React.Component {
    render() {
        return (
            <div className="ChatMessagesListView">
                <ChatMessageView ChatMessageId="0" ChatUserName="Гость2">
                    qqqqqttttt
                </ChatMessageView>
                <ThisUserChatMessageView ChatMessageId="1" ChatUserName="Гость1">
                    eprst
                </ThisUserChatMessageView>
            </div>
        );
    }
}