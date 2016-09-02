import React from 'react';
import ReactDOM from 'react-dom';
require('../style');
const knitGrid = require('./assets/images/knitgrid.png');

class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <div className='header'>
            <div className='name'>KATRYN McINTOSH</div>
            <div className='purpose'><span className='arrow'>>></span> art + code</div>
          </div>
          <img src={knitGrid} className='hero' />
          <div className='short-bio'>Katryn is an artist & UX engineer living in Providence, RI. Technology and textiles remain her preferred mediums, but her body of work is more readily defined by a consistent approach than a particular product.
          </div>
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
