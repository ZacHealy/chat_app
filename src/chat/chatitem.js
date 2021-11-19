import classes from "./chatitem.module.css";
import React from "react";
import { useRef } from "react";

function ChatItem(props) {
  const ref = useRef(props.msgID);
  const [showMore, setShowMore] = React.useState(false);
  const [showLink, setShowLink] = React.useState(false);

  React.useLayoutEffect(() => {
    if (ref.current.clientHeight > 80) {
      setShowLink(true);
    }
  }, []);

  const onClickMore = () => {
    setShowMore(!showMore);
    document.getElementById(props.msgID).style.maxHeight = "none";
  };

  if (props.id == props.userId) {
    return (
      <div ref={ref} className={classes.container}>
        <div className={classes.msgandshowmoreright}>
          <div id={props.msgID} className={classes.chatbubbleright}>
            {props.message}
          </div>
          {showLink && (
            <div className={classes.link} onClick={onClickMore}>
              {showMore ? "" : "show more"}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div ref={ref} className={classes.container}>
        <div className={classes.msgandshowmoreleft}>
          <div id={props.msgID} className={classes.chatbubbleleft}>
            {props.message}
          </div>
          {showLink && (
            <div className={classes.link} onClick={onClickMore}>
              {showMore ? "" : "show more"}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ChatItem;
