// src/components/PostList.tsx
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom' // Add Link and useParams imports
import axios from 'axios'

const PostList: React.FC = () => {
	const { id } = useParams() // Get the id parameter from the URL
	const userId = parseInt(id || '0', 10) // Convert id to a number

	const [posts, setPosts] = useState<any[]>([])

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
			.then(response => setPosts(response.data))
			.catch(error => console.error('Error fetching posts:', error))
	}, [userId])

	return (
		<div>
			<h2>Post List</h2>
			<ul>
				{posts.map((post: any) => (
					// Use Link to navigate to the comments for each post
					<li key={post.id}>
						<Link to={`/posts/${post.id}/comments`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default PostList
