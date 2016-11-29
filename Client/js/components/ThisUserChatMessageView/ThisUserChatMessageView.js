import React from "react";

import ChatMessageView from "../ChatMessageView";
import styles from "../ChatMessageView/ChatMessageView.css";

export default class ThisUserChatMessageView extends ChatMessageView {
    render() {
        return (
            <div className={styles.chatMessageView} style={ { backgroundColor: "#ffffcc"} }>
                <div className={styles.chatUserNameStyle}>{this.props.ChatUserName}:</div>
                <div className={styles.chatMessageStyle}>{this.props.children}</div>
                <div style={ { display:"inline-block", verticalAlign: "top", marginTop: "5px" } }>
                    <input type="button" value="&#9998;" />
                    <input type="button" value="&#10006;" />
                </div>
            </div>
        );
    }
}
