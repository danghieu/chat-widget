import io from "socket.io-client"
import { BACKEND_URL } from '../constants/Config';

const setupSocket = () => {
  let socket = io.connect(BACKEND_URL)  
  return socket
}

export default setupSocket