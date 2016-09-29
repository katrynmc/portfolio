import React from 'react';
import Square from 'react-icons/lib/go/primitive-square';

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='name'>KATRYN<br />McINTOSH</div>
      <div className='section art'><Square /> artist</div>
      <div className='section'><Square /> software engineer</div>
    </div>
  );
};

export default NavBar;
