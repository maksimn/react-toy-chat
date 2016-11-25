import React from "react";

export default class ChatMessageView extends React.Component {
    constructor() {
        super();
        this.styleObj = { "width" : "300px" };
        this.chatUserNameStyle = {
            padding: "5px",
            display: "inline-block",
            width: "65px",
            "vertical-align": "top"
        };
        this.chatMessageStyle = {
            padding: "5px",
            display: "inline-block",
            width: "155px",
            overflow: "auto"
        };
        this.emptyBlockStyle = { width: "50px" };
    }
    render() {
        return (
            <div style={this.styleObj}>
                <div style={this.chatUserNameStyle}>{this.props.ChatUserName}:</div>
                <div style={this.chatMessageStyle}>{this.props.children}</div>
                <div style={this.emptyBlockStyle}></div>
            </div>
        );
    }
}