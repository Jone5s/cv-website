import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css';

const MainNavigation = () => {
  return (
    <header className='header'>
      <nav>
        <ul className='list'>
          <li><Link to="/">CV</Link></li>
          {/*<li><Link to="/quest-book">Quest Book</Link></li>*/}
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;