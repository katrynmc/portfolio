import React from 'react';
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='name'><Link to="/">katryn<br />mcIntosh</Link></div>
      <div className='section art'><Link to="/art">art</Link></div>
      <div className='section'><Link to="/engineering">engineering</Link></div>
    </div>
  );
};

export default NavBar;
