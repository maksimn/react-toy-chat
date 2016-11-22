import React from "react";

export default class ChatMessageView extends React.Component {
    render() {
        return (
            <div className="ChatMessageView">
                <div className="ChatUserName">{this.props.ChatUserName}</div>
                <div className="ChatMessageText">{this.props.children}</div>
            </div>
        );
    }
}