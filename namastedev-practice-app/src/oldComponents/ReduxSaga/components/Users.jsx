import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from '../redux/actions/userActions'

const Users = () => {
    const dispatch = useDispatch();
    const {users, loading, error} = useSelector(state => state.user);
    const handleFetch = () => {
        // Dispatch an action to fetch users
      dispatch(fetchUsers());
    }
  return (
    <div>
         <h2>User List</h2>
        <button onClick={handleFetch}>Fetch Users</button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>  
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Users