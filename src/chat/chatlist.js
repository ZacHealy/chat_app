import ChatItem from "./chatitem";
import classes from "./chatlist.module.css";

function ChatList(props) {
  const submit = props.submit;
  function Submit(props) {
    submit(props);
  }

  return (
    <div className={classes.scrollingSection}>
      {props.messages.map((message) => (
        <ChatItem
          key={message.id}
          message={message.message}
          id={message.userID}
          userId={props.id}
          msgID={message.id}
          submit={Submit}
        />
      ))}
    </div>
  );
}

export default ChatList;
