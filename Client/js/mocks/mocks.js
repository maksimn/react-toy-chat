export function mockWebSocketEvents (onMessageCallback) {
    var msgObj1 = { chatUserName: "Гость2", chatMessageText: "Hello world" };
    var msgObj2 = { chatUserName: "Гость3", chatMessageText: "Чё??" };
    setTimeout(() => {
        onMessageCallback(msgObj1);
    }, 3000);
    setTimeout(() => {
        onMessageCallback(msgObj2);
    }, 6000);
}

export function mockAppInitalizer(initCallback) {
    const obj = {
        ThisUser: {Name:"Гость1",Id:"0"},
        ChatMessages: []
    }
    setTimeout(
        initCallback(JSON.stringify(obj)), 
    100);
}