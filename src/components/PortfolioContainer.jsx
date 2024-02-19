import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />;
    } else {
      return <Contact />;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}    
      //footer
    </div>

  );
}

export default PortfolioContainer;
