export function mockWebSocketMessages() {
    return function(dispatch) {
        var msgObj1 = { chatUserName: "Гость2", chatMessageText: "Hello world" };
        var msgObj2 = { chatUserName: "Гость3", chatMessageText: "Чё??" };
        setTimeout(() => {
            dispatch({ type: "CHAT_MESSAGE_RECEIVED", payload: msgObj1 });
        }, 3000);
        setTimeout(() => {
            dispatch({ type: "CHAT_MESSAGE_RECEIVED", payload: msgObj2 });
        }, 6000);
    };
}
