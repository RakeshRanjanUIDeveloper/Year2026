import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const SearchFilter = () => {
    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
  const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    console.log(json);
    setUsers(json)
    setFilteredUsers(json)
  };
  useEffect(() => { 
    fetchUsers();
  }, []);

  return (
    <React.Fragment>
    <div className="search">
        <input type="text" placeholder="search users..." value={searchText} onChange={(e)=> setSearchText(e.target.value)} />
        <button onClick={()=>{
            const filteredUsers = users.filter((res)=>
                res.name.toLowerCase().includes(searchText.toLowerCase())
            )
            setFilteredUsers(filteredUsers)
        }}>Search</button>
    </div>
    {
        filteredUsers.map((user)=>(
            <UserCard key={user.id} userData={user} />
        ))
    } 
    </React.Fragment>
  );
};

export default SearchFilter;
