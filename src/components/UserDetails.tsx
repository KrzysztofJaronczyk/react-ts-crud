import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' // Add this import
import axios from 'axios'

interface User {
	id: number
	name: string
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo: {
			lat: string
			lng: string
		}
	}
}

const UserDetails: React.FC = () => {
	const { id } = useParams() // Get the id parameter from the URL
	const userId = parseInt(id ?? '', 10) // Convert id to a number

	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
				setUser(response.data)
			} catch (error) {
				console.error('Error fetching user:', error)
			}
		}

		fetchUser()
	}, [userId])

	const handleCreate = () => {
		console.log('Create user')
	}

	const handleRead = () => {
		console.log('Read user')
	}

	const handleUpdate = () => {
		console.log('Update user')
	}

	const handleDelete = () => {
		console.log('Delete user')
	}

	return (
		<div>
			<h2>User Details</h2>
			{user ? (
				<div>
					<p>ID: {user.id}</p>
					<p>Name: {user.name}</p>
					<p>Username: {user.username}</p>
					<p>Email: {user.email}</p>
					<p>
						Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
					</p>
					<p>
						Location: Lat - {user.address.geo.lat}, Lng - {user.address.geo.lng}
					</p>
				</div>
			) : (
				<p>Loading user data...</p>
			)}

			<div>
				<button onClick={handleCreate}>Create User</button>
				<button onClick={handleRead}>Read User</button>
				<button onClick={handleUpdate}>Update User</button>
				<button onClick={handleDelete}>Delete User</button>
			</div>
		</div>
	)
}

export default UserDetails
