import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RegularFetch() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const Fetchpost = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3001/posts'
      );
      setPosts(response.data);
    } catch (error) {
      setError('Failed to fetch posts. Please check your server.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    Fetchpost();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Regular Fetch</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default RegularFetch;
