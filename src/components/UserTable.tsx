// src/components/UserTable.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PostList from './PostList';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>User Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/user/${user.id}`}>
                  <button onClick={() => handleUserClick(user)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                      <path d="M6 8a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5zM8 1a7 7 0 1 0 7 7 7 7 0 0 0-7-7zM1 8a7 7 0 0 1 11.985-4.43.5.5 0 0 1 .502.865A6 6 0 1 0 14 8a6 6 0 0 0-12 0z"/>
                    </svg>
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && <PostList userId={selectedUser.id} />}
    </div>
  );
};

export default UserTable;
