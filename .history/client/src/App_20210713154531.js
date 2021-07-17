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

  const sendMessage = () => {
    if (message !== null) {
      const msg = {
        content: message,
        id: id
      }

      socketRef.current.emit("sendDataClient", msg);
      setMessage();
    }
  }

  const renderMess = mess.map((m, index) =>
    <div
      key={index}
      className={`${m.id === id ? "your-message" : "other-people"} chat-item`}
    >
      {m.content}    
    </div>
  );


  return (<div class="box-chat">
  <div class="box-chat_message">
      {renderMess}
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