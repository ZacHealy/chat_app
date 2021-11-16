import classes from "./userlist.module.css";
import UserItem from "./useritem";

function UserList(props) {
  console.log(props);
  return (
    <div className={classes.item}>
      {props.users.map((user) => (
        <UserItem
          key={user.firstName}
          avatar={user.avatar}
          firstName={user.firstName}
          lastName={user.lastName}
        />
      ))}
    </div>
  );
}

export default UserList;
