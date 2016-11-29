export default class MockWebSocketEvents {
    constructor(onMessageCallback) {
        var msgObj1 = { chatUserName: "Гость2", chatMessageText: "Hello world" };
        var msgObj2 = { chatUserName: "Гость3", chatMessageText: "Чё??" };
        setTimeout(() => {
            onMessageCallback(msgObj1);
        }, 3000);
        setTimeout(() => {
            onMessageCallback(msgObj2);
        }, 6000);
    }
}