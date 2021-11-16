import { useEffect } from "react";
import { useState } from "react";
import UserList from "../users/userlist";
import classes from "./user.module.css";

function UserView() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedUsers, setLoadedUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://610b713652d56400176b0255.mockapi.io/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const users = data;
        setLoadedUsers(users);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.container}>
      <UserList users={loadedUsers} />
    </div>
  );
}

export default UserView;
