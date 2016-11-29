import React from "react";

import styles from "./ChatMessageView.css";

export default class ChatMessageView extends React.Component {
    render() {
        return (
            <div className={ styles.chatMessageView }>
                <div className={ styles.chatUserNameStyle }>{this.props.ChatUserName}:</div>
                <div className={ styles.chatMessageStyle }>{this.props.children}</div>
                <div className={ styles.emptyBlockStyle }></div>
            </div>
        );
    }
}