import React, { useState } from 'react';
import Home from './Home';
import Articles from './Articles';
import Article from './Article';
import ContactForm from './ContactForm';
import About from './About';
import Services from './Services';
import Footer from './Footer/Footer';


import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className="App">
      <nav className="navbar">
        <ul className="navlist">
          <li className={`navitem ${currentPage === 'home' ? 'active' : ''}`} onClick={() => handlePageChange('home')}>Home</li>
          <li className={`navitem ${currentPage === 'about' ? 'active' : ''}`} onClick={() => handlePageChange('about')}>About</li>
          <li className={`navitem ${currentPage === 'services' ? 'active' : ''}`} onClick={() => handlePageChange('services')}>Services</li>
          <li className={`navitem ${currentPage === 'articles' ? 'active' : ''}`} onClick={() => handlePageChange('articles')}>Articles</li>
        </ul>
      </nav>
      <div className="content">
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'articles' && <Articles handlePageChange={handlePageChange} />}
        {currentPage.startsWith('article-') && <Article id={currentPage.slice(8)} handlePageChange={handlePageChange} />}
      </div>
      <div className='footer'>
      <Footer />
      </div>
    </div>
  );
}

export default App;
