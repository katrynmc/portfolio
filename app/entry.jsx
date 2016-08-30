import React from 'react';
import ReactDOM from 'react-dom';
require('../style');

class Hello extends React.Component {
  render() {
    return (
      <div>
        <main>
          <div className='header'>
            <div className='name'>KATRYN McINTOSH</div>
            <div className='purpose'><span className='arrow'>>></span> art + engineering</div>
          </div>
          <div className='short-bio'>Katryn is an artist & UX engineer living in Providence, RI. Technology and textiles remain her preferred mediums, but her body of work is more readily defined by a consistent approach than a particular product.
          </div>
          <div>
            <a href="http://twitter.com/k_tryn" target="_blank">Twitter</a>
            <a href="http://instagram.com/testkitschen" target="_blank">Instagram</a>
            <a href="http://diamondbones.tumblr.com" target="_blank">Tumblr</a>
            <a href="http://pinterest.com/testkitschen" target="_blank">Pinterest</a>
            <a href="http://github.com/katrynmc" target="_blank">Github</a>
            </div>
        </main>
      </div>
    );
  }
}

ReactDOM.render(<Hello/>, document.getElementById('test'));
