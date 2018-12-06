/**
 * Mocking client-server processing
 */
import channels from './channels.json'

const TIMEOUT = 1000
export default {
  fakeGetChannels: fakeGetChannels
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

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}