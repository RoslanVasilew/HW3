import React, { useState } from 'react';

export default function FCSystemAdmin(props) {
  const a = props.c;
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

  const removeUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const updtList = () => {
    const updatedUsers = [...users];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const disconnectAsAdmin = () => {
    props.out()
  };
 
  return (
    <div className="admin-panel">
      <h2>User List</h2>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birth Date</th>
              <th>City</th>
              <th>Street</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>
                  <img src={user.img} alt="User" style={{ width: '50px', height: '50px' }} />
                </td>
                <td>{user.name}</td>
                <td>{user.first}</td>
                <td>{user.last}</td>
                <td>{user.birthDate}</td>
                <td>{user.city}</td>
                <td>{user.street}</td>
                <td>{user.email}</td>
                <td>
                  <button className="button delete-button" onClick={() => removeUser(index)}>Remove</button>
                  <button className="button update-button" onClick={()=>{props.edit(user);sessionStorage.setItem("user",JSON.stringify(user));updtList()}}>Edit Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="disconnect-button" onClick={disconnectAsAdmin}>Disconnect as admin</button>
    </div>
  );
}
