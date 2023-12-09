// src/components/CommentList.tsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CommentList: React.FC = () => {
	const { postId } = useParams() // Get the postId parameter from the URL
	const postNumber = parseInt(postId || '0', 10) // Convert postId to a number

	const [comments, setComments] = useState<any[]>([])

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${postNumber}/comments`)
			.then(response => setComments(response.data))
			.catch(error => console.error('Error fetching comments:', error))
	}, [postNumber])

	return (
		<div>
			<h2>Comment List for Post {postNumber}</h2>
			<ul>
				{comments.map((comment: any) => (
					<li key={comment.id}>
						<p>Name: {comment.name}</p>
						<p>Email: {comment.email}</p>
						<p>Body: {comment.body}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default CommentList
