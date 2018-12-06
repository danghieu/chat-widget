/**
 * Mocking client-server processing
 */
import channels from './channels.json'

const TIMEOUT = 1000
export default {
  fakeGetChannels: fakeGetChannels,
  fakeGetChannel: fakeGetChannel
}

function fakeGetChannels() {
  return new Promise(resolve => {
    // Resolve after a timeout so we can see the loading indicator
    setTimeout(
      () =>
        resolve({
          channels: channels
        }),
        TIMEOUT
    );
  });
}

function fakeGetChannel(id) {
  return new Promise(resolve => {
    let channel = channels.filter(channel => channel.id == id);
    channel = (channel && channel[0]) ? channel[0] : {};
    // Resolve after a timeout so we can see the loading indicator
    setTimeout(
      () =>
        resolve({
          channel: channel
        }),
        TIMEOUT
    );
  });
}


// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}