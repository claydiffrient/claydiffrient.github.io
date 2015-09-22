import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  render () {
    return (
      <nav>
        <Link to='/archives'>Archives</Link>
        <Link to='/projects'>Projects</Link>
      </nav>
    );
  }
};
