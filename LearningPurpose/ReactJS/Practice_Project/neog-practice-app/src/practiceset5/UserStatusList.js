import React, { useEffect, useState } from 'react'
import { fakeFetch } from './fakeFetch'

const UserStatusList = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        const fetchUsers = async () => {
            try {
                const response = await fakeFetch('https://example.com/api/users/status');
                if(response.status === 200){
                    setUsers(response.data.users)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers();
    }, [])
  return (
    <div>
        <h2>User Status</h2>
        <ul>
            {
                users.map((user) => (<li key={user.name} style={{color: user.status=== 'Online' ? 'green' : 'red'}}>{user.name} - {user.status}</li>))
            }
        </ul>
    </div>
  )
}

export default UserStatusList