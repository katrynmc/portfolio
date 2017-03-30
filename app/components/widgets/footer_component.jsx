import React from 'react';

import Heart from 'react-icons/lib/md/favorite';

const Footer = () => {
  return (
    <div className='footer'>
      <Heart className='sparkle' />
      <Heart className='sparkle' />
      <a className='email' href='mailto:katryn.mcintosh@gmail.com'>CONTACT ME</a>
    </div>
  );
};

export default Footer;
