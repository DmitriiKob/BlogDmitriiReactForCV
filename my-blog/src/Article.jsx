import React from 'react';

function Article({ id, handlePageChange }) {
  return (
    <div>
      <h1>Article {id}</h1>
      <p>This is the content of article {id}.</p>
      <button onClick={() => handlePageChange('articles')}>Back to Articles</button>
    </div>
  );
}

export default Article;
