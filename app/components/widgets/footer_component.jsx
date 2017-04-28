import React from 'react';

import Heart from 'react-icons/lib/md/favorite';

const Footer = () => {
  return (
    <div className='footer'>
      <Heart className='sparkle' />
      <p><a className='email' href='mailto:katryn.mcintosh@gmail.com'>email me</a></p>
    </div>
  );
};

export default Footer;
