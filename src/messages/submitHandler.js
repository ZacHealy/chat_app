import classes from "../pages/chat.module.css";
import { useRef } from "react";

function NewMessage(props) {
  const message = useRef();
  function SubmitHandler(event) {
    event.preventDefault();

    const currentMessages = props.messages;
    const newMessage = {
      id: props.messages.length + 1,
      userID: props.id,
      message: message.current.value,
    };

    currentMessages.push(newMessage);

    props.updateMessages(currentMessages);
  }

  return (
    <form id="messageinput" className={classes.textinputcontainer} onSubmit={SubmitHandler}>
      <div className={classes.messagecontainer}>
        <input
          className={classes.message}
          placeholder="Type Message"
          type="text"
          required
          id="message"
          ref={message}
        />
        <button className={classes.sendButton}>
          <img
            className={classes.image}
            src="https://png.pngitem.com/pimgs/s/149-1498879_font-awesome-5-regular-paper-plane-send-icon.png"
            alt="send"
          />
        </button>
      </div>
    </form>

  );
}

export default NewMessage;
