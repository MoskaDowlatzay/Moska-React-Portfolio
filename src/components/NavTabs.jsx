import React from 'react';

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange('Home')}
          className={
            props.currentPage === 'Home' ? 'nav-link active' : 'nav-link'
          }
          style={{ color: props.currentPage === 'Home' ? 'rgb(182,181,126)' : 'black' }}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => props.handlePageChange('Portfolio')}
          className={
            props.currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
          }
          style={{ color: props.currentPage === 'Portfolio' ? 'rgb(182,181,126)' : 'black' }}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => props.handlePageChange('Contact')}
          className={
            props.currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
          }
          style={{ color: props.currentPage === 'Contact' ? 'rgb(182,181,126)' : 'black' }}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
