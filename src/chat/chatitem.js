import classes from "./chatitem.module.css";

function ChatItem(props) {
  if (props.id == props.userId) {
    return <div className={classes.container}><div className={classes.chatbubbleright}>{props.message}</div></div>;
  } else {
    return <div className={classes.container}><div className={classes.chatbubbleleft}>{props.message}</div></div>;
  }
}

export default ChatItem;
