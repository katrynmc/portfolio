import React from 'react';

import SocialBar from './widgets/social_bar_component';
import Header from './widgets/header_component';
import Footer from './widgets/footer_component';

const App = React.createClass({
  render() {
    return (
      <div className='portfolio-site'>
        <Header />
        <main>
          <div className='main-interface'>
            {this.props.children}
          </div>
          <SocialBar />
        </main>
        <Footer />
      </div>
    );
  }
});
export default App;
