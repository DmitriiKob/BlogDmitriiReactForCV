import React from 'react';

function Articles({ handlePageChange }) {
  const handleClick = (id) => {
    handlePageChange(`article-${id}`);
  }

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        <li onClick={() => handleClick(1)}>Article 1</li>
        <li onClick={() => handleClick(2)}>Article 2</li>
        <li onClick={() => handleClick(3)}>Article 3</li>
      </ul>
    </div>
  );
}

export default Articles;
