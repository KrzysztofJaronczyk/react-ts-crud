// src/components/PostList.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom' // Add this import

import axios from 'axios';

const PostList: React.FC  = () => {
	const { id } = useParams() // Get the id parameter from the URL
	const userId = parseInt(id ?? '', 10) // Convert id to a number

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, [userId]);

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
