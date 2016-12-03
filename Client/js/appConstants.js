const scriptElement = document.querySelector('script');      
const jsonChatMessages = scriptElement.getAttribute('data-chat-messages');

export const chatMessages = JSON.parse(jsonChatMessages);
export const userName = scriptElement.getAttribute('data-userName');
