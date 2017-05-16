import React from 'react';

import Heart from 'react-icons/lib/md/favorite';

const Footer = () => {
  return (
    <div className='footer'>
      <a className='email' href='mailto:katryn.mcintosh@gmail.com'>
        <Heart className='sparkle' />
        EMAIL ME
      </a>
    </div>
  );
};

export default Footer;
