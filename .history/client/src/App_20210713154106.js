import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";

const host = "http://localhost:3000";

function App() {
  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState('');
  const [id, setId] = useState();

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient.connect(host);

    socketRef.current.on("getId", data => {
      setId(data);
    });

    socketRef.current.on("sendDataServer", dataGot => {
      //if there are new messages, mess will be re-rendered 
      setMess(oldMsgs => [...oldMsgs, dataGot.data]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);


  return (<div class="box-chat">
  <div class="box-chat_message">
      
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