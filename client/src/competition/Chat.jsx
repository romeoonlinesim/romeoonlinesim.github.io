import React, {useState, useEffect, useRef} from "react";
import socketIOClient from "socket.io-client";

import "./Competition.scss";

const BACKEND_URL = process.env.REACT_APP_SERVER_URL;

function Chat(props) {
    const {authenticated} = props;

    const initialMess = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];

    const [mess, setMess] = useState(initialMess);
    const [message, setMessage] = useState("");
    const [id, setId] = useState();

    const socketRef = useRef();
    const messagesEnd = useRef();

    useEffect(() => {
        socketRef.current = socketIOClient.connect(BACKEND_URL.slice(0,-4), {
            path: "/api/socket"
        });
    
        socketRef.current.on("getId", data => {
          setId(data);
        });
    
        socketRef.current.on("sendDataServer", dataGot => {
          //if there are new messages, mess will be re-rendered 
          setMess(oldMsgs => [...oldMsgs, dataGot.data]);
          scrollToBottom();
        });
    
    
        return () => {
          socketRef.current.disconnect();
        };
      }, []);
      
    const sendMessage = () => {
        if (props.user === undefined) return;
        if (message !== null && message !== "") {
            if (mess[0] === "")
                mess.shift(); 

            const msg = {
                content: message,
                id: props.user.username
            }
        
            socketRef.current.emit("sendDataClient", msg);
            setMessage("");

            //remove first message in array if there are more than 40
            if (mess.length > 25) 
                mess.shift();
        }
    }
    
    const renderMess = mess.map((m, index) =>
        <div key={index} className="pb-2 pt-1 chat-item">
            <div className="pb-2 pt-1">
                <span className="chat-label">{m.id}</span>
                <span>{m.content}</span>
            </div>
        </div>
    );
    
    const handleChange = (e) => {
        setMessage(e.target.value);
    }
    
    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
          sendMessage();
        }
    }
    
    const scrollToBottom = () => {
        //messagesEnd.current.scrollIntoView({behavior: "auto", block:"end"});
    }  
    
    return (
        <div className="col-lg-3 chat-box">
            <div className="chat-header row">
                <div className="col-lg-12">Live Chat</div>
            </div>
            <div className="row chat">
                {renderMess}
                <div style={{ float:"left", clear: "both" }}
                    ref={messagesEnd}>
                </div>
            </div>
            <div className="row chat-input pt-3 pb-3">
                <div className="col-lg-1" />
                <input type="textarea" className="col-lg-10 chat-text"
                    disabled={!{authenticated}.authenticated}
                    value={message}
                    onKeyDown={onEnterPress}
                    onChange={handleChange}
                    placeholder="Type something ..." />
                <div className="col-lg-1" />
            </div>
            <div className="row d-flex">
                <div className="col-lg-8" />
                <input type="button" className="btn btn-primary col-lg-3" defaultValue="Send" onClick={sendMessage}/>
                <div className="col-lg-1" />
            </div>
        </div>
    );
}

export default Chat;