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
      {/* footer     */}
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet"/>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet"/>
<footer class="footer">
  <div class="container text-center">
    <a href="https://github.com/MoskaDowlatzay"><i class="fa fa-github"></i></a>
    <a href="https://twitter.com/?lang=en"><i class="bi--twitter-x"></i></a>
    <a href="https://www.linkedin.com/in/moska-dowlatzay/"><i class="fa fa-linkedin"></i></a>
  </div>
</footer>
    </div>

  );
}

export default PortfolioContainer;
