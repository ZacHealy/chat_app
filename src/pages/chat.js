import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ChatList from "../chat/chatlist";

import classes from "./chat.module.css";

function ChatView(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMessages, setLoadedMessages] = useState([]);
  const location = useLocation();
  const id = location.state;

  useEffect(() => {
    setIsLoading(true);
    fetch("https://610b713652d56400176b0255.mockapi.io/messages")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const messages = data;
        setLoadedMessages(messages);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.container}>
      <ChatList messages={loadedMessages} id={id}/>
    </div>
  );
}

export default ChatView;
