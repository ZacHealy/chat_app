import classes from "./useritem.module.css"

function UserItem(props) {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img className={classes.image} src={props.avatar} alt={props.firstName} />
      </div>
      <div className={classes.textContainer}>
        <div className={classes.firstName}>{props.firstName}</div>
        <div className={classes.lastName}>{props.lastName}</div>
      </div>
    </div>
  );
}

export default UserItem;
