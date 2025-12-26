import React, { useEffect, useState } from 'react';
import { fakePostFetch } from './fakePostFetch';

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]); 
  const [filteredPosts, setFilteredPosts] = useState([]); 

  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        const response = await fakePostFetch('https://example.com/api/posts');
        if (response.status === 200) {
          setAllPosts(response.data.posts); 
          setFilteredPosts(response.data.posts); 
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPostsData();
  }, []);

  const handleBakery = (category) => {
    const filteredCategoryPosts = allPosts.filter((post) => post.category === category);
    setFilteredPosts(filteredCategoryPosts); 
  };

  return (
    <React.Fragment>
      <div className="posts">
        {filteredPosts.map((post, index) => (
          <div className="post" key={post.id || index}>
            <figure>
              <img src={post.src} alt="Post" />
              <figcaption>{post.caption}</figcaption>
            </figure>
            <p>
              <b>Views:</b> {post.views}
            </p>
            <p>
              <b>Likes:</b> {post.likes}
            </p>
            <h2>{post.category}</h2>
          </div>
        ))}
        <button onClick={() => handleBakery('Bakery')}>Show Bakery</button>
      </div>
    </React.Fragment>
  );
};

export default Posts;
