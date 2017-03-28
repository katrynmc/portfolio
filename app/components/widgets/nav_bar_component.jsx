import React from 'react';
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='name'><Link to="/">KATRYN MCINTOSH</Link></div>
      <div className='section art'><Link to="/art">ART</Link></div>
      <div className='section'><Link to="/engineering">ENGINEERING</Link></div>
    </div>
  );
};

export default NavBar;
