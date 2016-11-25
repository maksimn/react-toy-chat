import React from "react";
import ChatMessageView from "./ChatMessageView";

export default class ThisUserChatMessageView extends ChatMessageView {    
    constructor() {
        super();
        this.btnBlockStyle = { display: "inline-block" };
        this.styleObj["background-color"] = "#ffffcc";
    };
    render() {
        return (
            <div style={this.styleObj}>
                <div style={this.chatUserNameStyle}>{this.props.ChatUserName}:</div>
                <div style={this.chatMessageStyle}>{this.props.children}</div>
                <div style={this.btnBlockStyle}>
                    <input type="button" value="&#9998;" />
                    <input type="button" value="&#10006;" />
                </div>
            </div>                
        );
    }
}
