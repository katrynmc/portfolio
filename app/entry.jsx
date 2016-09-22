import React from 'react';
import ReactDOM from 'react-dom';
require('../style');
const knitGrid = require('./assets/images/brainmoth.png');

class App extends React.Component {
  render() {
    return (
      <div className='portfolio-site'>
        <div className='header'>
          <div className='nav'>
            <div className='ellipsis'>
              <div className='dot red' />
              <div className='dot yellow' />
              <div className='dot blue' />
            </div>
            <div className='name'>KATRYN<br />McINTOSH</div>
          </div>


        </div>

        <main>
          <div className='sub-header'>
            <div className='split-screen left'>
              <div className='purpose'>art<br />+ code</div>
              <div className='short-bio'>
                Katryn is an artist & UX engineer living in Providence, RI. Technology and textiles remain her preferred mediums, but her body of work is more readily defined by a consistent approach than a particular product.
              </div>
            </div>
            <div className='split-screen right'>
              <img className='portfolio-img' src={knitGrid} />
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
