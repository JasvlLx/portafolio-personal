import React, { useState, useEffect } from 'react';
import './Blog.css';
import BlogPost from './BlogPost';
import blogPosts from './blogPosts.json';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simular una llamada a una API
    setPosts(blogPosts);
  }, []);

  return (
    <section id="blog" className="blog">
      <h2>Blog</h2>
      <div className="blog-list">
        {posts.map(post => (
          <BlogPost
            key={post.id}
            title={post.title}
            date={post.date}
            summary={post.summary}
            content={post.content}
          />
        ))}
      </div>
    </section>
  );
}

export default Blog;
