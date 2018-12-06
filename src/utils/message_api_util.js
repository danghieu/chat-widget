/**
 * Mocking client-server processing
 */
const TIMEOUT = 1000
export default {
  fakeGetMessages: fakeGetMessages
}
const messageChannel0 = [
  { name: "Hieu", message: "test", id: "1" },
  { name: "Hieu 2", message: "test 1", id: "2" },
  { name: "Hieu 3", message: "test 2", id: "3" },
  { name: "Hieu 2", message: "test 3", id: "4" },
  { name: "Hieu 1", message: "test channel 1", id: "5" },
];

const messageChannel1 = [
  { name: "Hieu", message: "test", id: "1" },
  { name: "Hieu 2", message: "test 1", id: "2" },
  { name: "Hieu 3", message: "test 2", id: "3" },
  { name: "Hieu 2", message: "test 3", id: "4" },
  { name: "Hieu", message: "test channel 2", id: "5" },
];

const messagesdata =[{channel_id: 0, messages: messageChannel0}, {channel_id: 1, messages: messageChannel1}] 
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