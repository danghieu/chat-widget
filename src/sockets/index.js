import io from "socket.io-client"

const setupSocket = () => {
  const backendServer = process.env.backendURI||"http://localhost:3001";
  let socket = io.connect(backendServer)  
  return socket
}

export default setupSocket