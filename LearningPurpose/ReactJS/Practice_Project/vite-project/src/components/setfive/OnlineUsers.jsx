import React, { useEffect, useState } from "react";
import { FakeFetch } from "./FakeFetch";

const OnlineUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
//   const onlineUsers = {
//     color: "green",
//   };
//   const offlineUsers = {
//     color: "red",
//   };
  const fetchData = async () => {
    try {
      const response = await FakeFetch("https://example.com/api/users/status");
      setAllUsers(response.data.users);
    } catch (error) {
      console.log(error);
    } finally{
        setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <h2>Users Status</h2>
      {loading ? (
        <p>Loading Users....</p>
      ) : (
        <ul>
          {allUsers.map((u, index) => (
            <li
              key={index}
              /* style={u.status === "Online" ? onlineUsers : offlineUsers} */
              style={{color: u.status=== 'Online' ? 'green' : 'red'}}
            >
              {u.name} - Status <b>{u.status}</b>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default OnlineUsers;
