import classes from "./editmsg.module.css";

import { useRef } from "react";

function EditMsg(props) {
  const message = useRef();
  const height = props.size.height;
  const width = props.size.width;
  const left = props.location.left;
  const top = props.location.top;

  const submitup = props.submit;

  function Submit(event) {
    event.preventDefault();
    submitup(message.current.value);
  }

  return (
    <div>
      <div
        style={{ height: height, width: width, top: top, left: left }}
        className={classes.messagecontainer}
      >
        <form>
          <textarea
            className={classes.input}
            style={{ height: height }}
            defaultValue={props.message}
            ref={message}
          ></textarea>
          <button className={classes.button} onClick={Submit}>
            Edit Message
          </button>
        </form>
      </div>
      <div className={classes.background} onClick={props.onClick} />
    </div>
  );
}

export default EditMsg;