import io from "socket.io-client"

const setupSocket = () => {
  const backendServer = process.env.backendURI||"http://localhost:3000";
  let socket = io.connect(backendServer)  
  return socket
}

export default setupSocket