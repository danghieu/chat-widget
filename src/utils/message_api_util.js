/**
 * Mocking client-server processing
 */
const TIMEOUT = 1000
export default {
  fakeGetMessages: fakeGetMessages,
  addMessage: addMessage
}
const messageChannel0 = [
  { name: "Hieu", message: "test" },
  { name: "Hieu 2", message: "test 1" },
  { name: "Hieu 3", message: "test 2" },
  { name: "Hieu 2", message: "test 3" },
  { name: "Hieu 1", message: "test channel 1" },
];

const messageChannel1 = [
  { name: "Hieu", message: "test" },
  { name: "Hieu 2", message: "test 1" },
  { name: "Hieu 3", message: "test 2" },
  { name: "Hieu 2", message: "test 3" },
  { name: "Hieu", message: "test channel 2" },
];

const messagesdata =[{channel_id: "channel_0", messages: messageChannel0}, {channel_id: "channel_1", messages: messageChannel1}] 
function fakeGetMessages(id) {
  return new Promise(resolve => {
    let messages = messagesdata.filter(message => message.channel_id == id);
    messages = (messages && messages[0]) ? messages[0].messages : [];
    setTimeout(
      () =>
        resolve({
          messages: messages
        }),
        TIMEOUT
    );
  });
}

function addMessage(channelId, message, name) {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          message: { message: message, name: name } 
        }),
        TIMEOUT
    );
  });
}