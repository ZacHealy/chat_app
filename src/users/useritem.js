import classes from "./useritem.module.css"
import { Link } from "react-router-dom";

function UserItem(props) {
  console.log(props.id);
  return (
    <Link className={classes.container} to='/chatview' state={props.id}>
      <div className={classes.image}>
        <img className={classes.image} src={props.avatar} alt={props.firstName} />
      </div>
      <div className={classes.textContainer}>
        <div className={classes.firstName}>{props.firstName}</div>
        <div className={classes.lastName}>{props.lastName}</div>
      </div>
    </Link>
  );
}

export default UserItem;
