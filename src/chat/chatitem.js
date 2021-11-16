import classes from "./chatitem.module.css";

function ChatItem(props) {
  console.log(props);
  if (props.id == props.userId) {
    return <div className={classes.chatbubbleright}>{props.message}</div>;
  } else {
    return <div className={classes.chatbubbleleft}>{props.message}</div>;
  }
}

export default ChatItem;
