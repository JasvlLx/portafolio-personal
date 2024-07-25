import React, { useState } from 'react';
import './BlogPost.css';

function BlogPost({ title, date, summary, content }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="blog-post">
      <h3>{title}</h3>
      <p><small>{date}</small></p>
      <p>{summary}</p>
      {showContent && <p>{content}</p>}
      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? 'Leer menos' : 'Leer más'}
      </button>
    </div>
  );
}

export default BlogPost;
