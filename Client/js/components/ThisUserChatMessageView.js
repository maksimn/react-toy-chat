import React from "react";
import ChatMessageView from "./ChatMessageView";

export default class ThisUserChatMessageView extends ChatMessageView {
    render() {
        return (
            <div className="ChatMessageView ThisUserChatMessageView">
                <div className="ChatUserName">{this.props.ChatUserName}</div>
                <div className="ChatMessageText">{this.props.children}</div>
                <div className="ChatMessageEditDeleteButtons">
                    <input type="button" value="&#9998;" />
                    <input type="button" value="&#10006;" />
                </div>
            </div>
        );
    }
}
