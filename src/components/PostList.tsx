// src/components/PostList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface PostListProps {
  userId: number;
}

const PostList: React.FC<PostListProps> = ({ userId }) => {
  const [posts, setPosts] = useState([]);

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
