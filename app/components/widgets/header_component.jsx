import React from 'react';
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='header'>
      <div className='name'><Link to="/">KATRYN MCINTOSH</Link></div>
      <ul className='nav-items'>
        <li className='section'><Link to="/art">ART</Link></li>
        <li className='section'><Link to="">ENGINEERING</Link></li>
      </ul>
    </div>
  );
};

export default Header;
