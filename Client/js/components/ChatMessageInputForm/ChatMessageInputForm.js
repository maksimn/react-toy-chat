import React from "react";

export default class ChatMessageInputForm extends React.Component {
    submitHandler(e) {
        e.preventDefault();
        const messageText = e.target.messageText.value;
        e.target.messageText.value = "";
        this.props.addChatMessage({
            chatUserName: this.props.userName,
            chatMessageText: messageText
        });
    }
    render() {
        return (
            <div>
                <form action="/" method="POST" onSubmit={this.submitHandler.bind(this)}>
                    <h4>Вы вошли как {this.props.userName}</h4>
                    <input name="messageText" type="text" />
                    <input type="submit" value="Отправить" />
                </form>
            </div>
        );
    }
}