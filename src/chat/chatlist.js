import ChatItem from "./chatitem";

function ChatList(props) {
    console.log(props.id);
  return (
    <div>
      {props.messages.map((message) => (
        <ChatItem
          key={message.id}
          message={message.message}
          createdat={message.createdAt}
          id={message.userID}
          userId={props.id}
        />
      ))}
    </div>
  );
}

export default ChatList;
