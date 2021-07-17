import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";

const host = "http://localhost:3000";

function App() {
  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState('');
  const [id, setId] = useState();

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient.connect(host)
  }, []);


  return (<div class="box-chat">
  <div class="box-chat_message">
      // phần này cho tin nhắn
  </div>

  <div class="send-box">
      <textarea 
        value={}  
        onKeyDown={}
        onChange={} 
        placeholder="Nhập tin nhắn ..." 
      />
      <button onClick={}>
        Send
      </button>
  </div>
</div>);

}

export default App;