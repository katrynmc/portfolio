import React from 'react';

import OctoFace from 'react-icons/lib/go/octoface';
import Instagram from 'react-icons/lib/fa/instagram';
import Twitter from 'react-icons/lib/fa/twitter';
import LinkedIn from 'react-icons/lib/fa/linkedin';


const SocialBar = ({}) => {

  return (
    <div className='social-wrapper'>
      <a href='http://twitter.com/k_tryn' target='_new' >
        <Twitter className='social-icon' />
      </a>
      <a href='http://instagram.com/katrynmcintosh' target='_new' >
        <Instagram className='social-icon' />
      </a>
      <a href='http://github.com/katrynmc' target='_new' >
        <OctoFace className='social-icon' />
      </a>
      <a href='http://linkedin.com/in/katrynmcintosh' target='_new' >
        <LinkedIn className='social-icon' />
      </a>
    </div>
  );
};

export default SocialBar;
