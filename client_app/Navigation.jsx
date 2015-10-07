import React from 'react';
import { Link } from 'react-router';

require('./styles/Navigation.css');

export default class Navigation extends React.Component {
  render () {
    return (
      <nav className='row'>
        <div className='col-xs'>
          <div className='Navigation__Item'>
            <Link to='/archives'>Archives</Link>
          </div>
        </div>
        <div className='col-xs'>
          <div className='Navigation__Item'>
            <Link to='/projects'>Projects</Link>
          </div>
        </div>
      </nav>
    );
  }
};
