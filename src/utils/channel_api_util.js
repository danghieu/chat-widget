/**
 * Mocking client-server processing
 */
import channels from './channels.json'

const TIMEOUT = 100
export default {
  fetchChannels: (cb, timeout) => setTimeout(() => cb(channels), timeout || TIMEOUT)
}
