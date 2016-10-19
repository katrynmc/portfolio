import React from 'react';
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='name'><Link to="/">KATRYN<br />McINTOSH</Link></div>
      <div className='section art'><Link to="/art">artist</Link></div>
      <div className='section'><Link to="/engineering">software engineer</Link></div>
    </div>
  );
};

export default NavBar;
