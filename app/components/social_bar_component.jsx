import React from 'react';

import OctoFace from 'react-icons/lib/go/octoface';
import Instagram from 'react-icons/lib/fa/instagram';
import Twitter from 'react-icons/lib/fa/twitter';
import LinkedIn from 'react-icons/lib/fa/linkedin';


const SocialBar = ({}) => {
  const handleTwitterIconClick = () => {
    console.log('foo')
  }
  return (
    <div className='social-wrapper'>
      <Twitter className='social-icon' onClick={() => this.handleTwitterIconClick }/>
      <Instagram className='social-icon' onClick={() => this.handleTwitterIconClick} />
      <OctoFace className='social-icon' onClick={() => this.handleTwitterIconClick} />
      <LinkedIn className='social-icon' onClick={() => this.handleTwitterIconClick} />
    </div>
  );
};

export default SocialBar;
