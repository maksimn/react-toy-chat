import React from "react";

export default class ChatMessageInputForm extends React.Component {
    submitHandler(e) {
        e.preventDefault();
        const chatMessageText = e.target.chatMessageText.value;
        e.target.chatMessageText.value = "";
        this.props.addChatMessage({
            chatUserName: "Гость1",
            chatMessageText: chatMessageText
        });
    }
    render() {
        return (
            <div>
                <form action="/" method="POST" onSubmit={this.submitHandler.bind(this)}>
                    <h4>Вы вошли как Гость1</h4>
                    <input name="chatMessageText" type="text" />
                    <input type="submit" value="Отправить" />
                </form>
            </div>
        );
    }
}