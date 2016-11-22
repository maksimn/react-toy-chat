import React from "react";
import ChatMessageInputForm from "./components/ChatMessageInputForm";
import ChatMessagesListView from "./components/ChatMessagesListView";

export default class Layout extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div className="Layout">
                <ChatMessageInputForm />
                <ChatMessagesListView />
            </div>
        );
    }
}
