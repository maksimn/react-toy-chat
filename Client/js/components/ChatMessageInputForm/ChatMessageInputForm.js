import React from "react";

export default class ChatMessageInputForm extends React.Component {
    render() {
        return (
            <div className="ChatMessageInputForm">
                <h4>Вы вошли как Гость1</h4>
                <input className="ChatMessageInputTextbox" type="text" />
                <input className="ChatMessageSendButton" type="button" value="Отправить" />
            </div>
        );
    }
}