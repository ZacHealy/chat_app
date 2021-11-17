import ChatItem from "./chatitem";
import classes from "./chatlist.module.css"

function ChatList(props) {
  return (
    <div className={classes.scrollingSection}>
      {props.messages.map((message) => (
        <ChatItem
          key={message.id}
          message={message.message}
          id={message.userID}
          userId={props.id}
        />
      ))}
    </div>
  );
}

export default ChatList;
