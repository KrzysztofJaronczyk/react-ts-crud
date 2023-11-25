// src/components/UserTable.tsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UserDetails from './UserDetails'

interface User {
	id: number
	name: string
	username: string
	email: string
}

const UserTable: React.FC = () => {
	const [users, setUsers] = useState<User[]>([])

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(response => setUsers(response.data))
			.catch(error => console.error('Error fetching users:', error))
	}, [])

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
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map(user => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>{user.email}</td>
							<td>
								<Link to={`/user/${user.id}`}>Details</Link>
								{' | '}
								{/* Add link to user's posts */}
								<Link to={`/user/${user.id}/posts`}>Posts</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default UserTable
