import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page = props => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header />
    <Navigation isDrawer />
    <main className="mdl-layout__content">
      {
        React.Children.map(props.children, c => React.cloneElement(c))
      }
    </main>
    <Footer />
  </div>
);

Page.propTypes = {
  children: React.PropTypes.node,
};

export default Page;
