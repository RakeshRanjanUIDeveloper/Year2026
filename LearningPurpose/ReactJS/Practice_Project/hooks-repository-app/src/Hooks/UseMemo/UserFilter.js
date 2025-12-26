import React, { useMemo } from 'react'
import { useState } from 'react';
const UserFilter = () => {
    const [users, setUsers] = useState([
        "John Doe",
        "Jane Smith",
        "Michael Brown",
        "Emily Davis",
        "William Johnson",
        "Sophia Wilson",
        "James White",
        "Emma Harris",
      ]);
const [query, setQuery] = useState("");
const [count, setCount] = useState(0)
// Without useMemo
const filteredUsers = users.filter((user) => {
    console.log("filtering without useMemo");
    return user.toLowerCase().includes(query.toLowerCase());
  });

//with useMemo
// const filteredUsers = useMemo(() =>{
//     console.log("filtering Users...");
//     return users.filter((user) => user.toLowerCase().includes(query.toLowerCase()))
// }, [query, users]);

  return (
    <React.Fragment>
    <h2>User Filter with useMemo</h2>
    <button onClick={() => setCount(count+1)}>click {count} times</button>
    <input type='text' placeholder='search users... ' onChange={(e) => setQuery(e.target.value)} value={query} />
    <ul>
        {
            filteredUsers.map((user, index) => (
                <li key={index}>{user}</li>
            ))
        }
    </ul>
    </React.Fragment>
  )
}

export default UserFilter