import React from 'react';

export default class Header extends React.Component {

  render () {
    return (
      <header className='row center-xs'>
        <div className='col-xs'>
          <div className='Header'>
            <div className='row center-xs'>
              <div className='col-xs-12'>
                <img className='Header__Logo' src='/css/images/claylogo-graphic.png' />
              </div>
              <div className='col-xs-12'>
                <h1>Simply Diffrient</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

};

