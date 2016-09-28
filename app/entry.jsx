import React from 'react';
import ReactDOM from 'react-dom';
import '../style';
import Square from 'react-icons/lib/go/primitive-square';
import SocialBar from './components/social_bar_component';
import NavBar from './components/nav_bar_component';

const brainMoth = require('./assets/images/brainmoth.png');

const App = ({ }) => {


  return (
    <div className='portfolio-site'>
      <div className='header'>
        <NavBar />
      </div>
      <main>
        <div className='sub-header'>
          <div className='split-screen left'>
            <div className='short-bio' >
              Katryn is an artist & UX engineer living in Providence, RI. Technology and textiles remain her preferred mediums, but her body of work is more readily defined by a consistent approach than a particular product.
            </div>
          </div>
          <div className='split-screen right'>
            <img className='portfolio-img' src={brainMoth} />
          </div>
        </div>
        <SocialBar />
      </main>
      <footer>
      </footer>
    </div>
  );

}

ReactDOM.render(<App/>, document.getElementById('app'));
