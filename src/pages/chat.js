import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ChatList from "../chat/chatlist";
import NewMessage from "../messages/submitHandler";
import OrderArray from "../messages/arrayorder";
import Loader from "react-loader-spinner";

import classes from "./chat.module.css";

function ChatView(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMessages, setLoadedMessages] = useState([]);
  const location = useLocation();
  const id = location.state;
  const [state, stateAddOne] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://610b713652d56400176b0255.mockapi.io/messages")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const messages = data;
        const orderedMessages = OrderArray(messages);
        setLoadedMessages(orderedMessages);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className={classes.loadcontainer}>
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  function UpdateMessageArray(props) {
    setLoadedMessages(props);
    stateAddOne(state + 1);
    document.getElementById("messageinput").reset();
  }

  return (
    <div className={classes.overcontainer}>
      <div className={classes.container}>
        <ChatList messages={loadedMessages} id={id} />
      </div>
      <NewMessage
        messages={loadedMessages}
        id={id}
        updateMessages={UpdateMessageArray}
      />
      <Link className={classes.link} to="/">
        Back
      </Link>
    </div>
  );
}

export default ChatView;
