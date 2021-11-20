import classes from "./chatitem.module.css";
import React from "react";
import { useRef } from "react";

function ChatItem(props) {
  const ref = useRef(props.msgID);
  const [showMore, setShowMore] = React.useState(false);
  const [showLink, setShowLink] = React.useState(false);

  React.useLayoutEffect(() => {
    if (ref.current.clientHeight < ref.current.scrollHeight) {
      setShowLink(true);
      document.getElementById(props.msgID).style.overflow = "hidden";
    }
  }, []);

  const onClickMore = () => {
    setShowMore(true);
    document.getElementById(props.msgID).style.maxHeight = "none";
  };

  const onClickLess = () => {
    setShowMore(false);
    document.getElementById(props.msgID).style.maxHeight = "3.5rem";
  };

  if (props.id == props.userId) {
    return (
      <div ref={ref} className={classes.container}>
        <div className={classes.msgandshowmoreright}>
          <div
            id={props.msgID}
            className={classes.chatbubbleright}
            onClick={onClickLess}
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
    );
  } else {
    return (
      <div ref={ref} className={classes.container}>
        <div className={classes.msgandshowmoreleft}>
          <div
            id={props.msgID}
            className={classes.chatbubbleleft}
            onClick={onClickLess}
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
    );
  }
}

export default ChatItem;
