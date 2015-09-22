import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

export default class App extends React.Component {

  render () {
    return (
      <div>
        <Header />
        <Navigation />
        {this.props.children}
      </div>
    );
  }

};