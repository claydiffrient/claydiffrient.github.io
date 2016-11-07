import React from 'react';
import css from 'next/css';
import * as colors from '../styles/colorVariables';
import {DESKTOP_MIN_QUERY, MEDIUM_MIN_QUERY} from '../styles/breakpoints';


const style = css({
  background: colors.LIGHT_PRIMARY_COLOR,
  marginTop: '15px',
  marginLeft: '20px',
  marginRight: '20px',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
  [DESKTOP_MIN_QUERY]: {

  },
  [MEDIUM_MIN_QUERY]: {

  }
});

const imageStyle = css({
  height: '100px',
  margin: '5px',
  marginTop: '1.2em',
});

const headerStyle = css({
  color: colors.PRIMARY_TEXT_COLOR,
  fontSize: '3em',
})

const Header = () => (
  <div className={style}>
    <img
      className={imageStyle}
      src="/static/claylogo-graphic.png"
      alt="Clay Diffrient's Logo"
    />
    <h1 className={headerStyle}>Clay Diffrient Software Solutions</h1>
  </div>
);

export default Header;
