import classes from "./userlist.module.css";
import UserItem from "./useritem";

function UserList(props) {
  console.log(props);
  return (
    <div className={classes.item}>
      {props.users.map((user) => (
        <UserItem
          key={user.id}
          avatar={user.avatar}
          firstName={user.firstName}
          lastName={user.lastName}
          id={user.id}
        />
      ))}
    </div>
  );
}

export default UserList;
