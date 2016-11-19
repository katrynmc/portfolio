import React from 'react';

const brainMoth = require('../assets/images/brainmoth.png');
const img = <img id='source' src={brainMoth} />;

const Kaleidoscope = React.createClass({
  componentDidMount: function() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      const image = document.getElementById('source');
      console.log(image);
      ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
    }
    else {
      console.log('nope');
    }
  },

  render: function() {

    return (
      <div>
      <canvas id='canvas' height='500px' width='500px'>kaleidoscope</canvas>
      {img}
      </div>
    )
  }
});

export default Kaleidoscope;
