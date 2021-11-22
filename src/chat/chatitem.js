import classes from "./chatitem.module.css";
import React from "react";
import { useRef } from "react";
import EditMsg from "../editmsg/editmsg";

function ChatItem(props) {
  const ref = useRef(props.msgID);
  const [showMore, setShowMore] = React.useState(false);
  const [showLink, setShowLink] = React.useState(false);
  const [editMessage, setEditMessage] = React.useState(false);
  const msgID = props.msgID;
  const userID = props.userId;
  const submitter = props.submit;

  React.useLayoutEffect(() => {
    if (ref.current.clientHeight < ref.current.scrollHeight) {
      setShowLink(true);
      document.getElementById(props.msgID).style.overflow = "hidden";
    }
  }, [props.msgID]);

  const onClickMore = () => {
    setShowMore(true);
    document.getElementById(props.msgID).style.maxHeight = "none";
  };

  const onClickMsg = () => {
    setShowMore(true);
    document.getElementById(props.msgID).style.maxHeight = "none";
    setEditMessage(!editMessage);
  };

  const clickOut = () => {
    setShowMore(false);
    setEditMessage(false);
    document.getElementById(props.msgID).style.maxHeight = "3.9rem";
  };

  const Submit = (props) => {
    setShowMore(false);
    setEditMessage(false);
    document.getElementById(msgID).style.maxHeight = "3.9rem";
    const editedMessage = {
      id: msgID,
      userID: userID,
      message: props,
    };
    submitter(editedMessage);
  };

  if (props.id == props.userId) {
    return (
      <div>
        <div ref={ref} className={classes.container}>
          <div className={classes.msgandshowmoreright}>
            <div onClick={onClickMsg}>
              <div id={props.msgID} className={classes.chatbubbleright}>
                {props.message}
              </div>
            </div>

            {showLink && (
              <div className={classes.link} onClick={onClickMore}>
                {showMore ? "" : "Read more"}
              </div>
            )}
          </div>
        </div>
        <div className={classes.editright}>
          {editMessage && (
            <EditMsg
              location={document.getElementById(props.msgID).getClientRects()}
              size={document
                .getElementById(props.msgID)
                .getBoundingClientRect()}
              onClick={clickOut}
              message={props.message}
              submit={Submit}
            />
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div ref={ref} className={classes.container}>
          <div className={classes.msgandshowmoreleft}>
            <div
              id={props.msgID}
              className={classes.chatbubbleleft}
              onClick={clickOut}
            >
              {props.message}
            </div>
            {showLink && (
              <div className={classes.link} onClick={onClickMore}>
                {showMore ? "" : "Read more"}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ChatItem;
