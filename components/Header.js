import React from 'react';
import css from 'next/css';
import * as colors from '../styles/colorVariables';
import { SR_ONLY } from '../styles/utilities';
// import { DESKTOP_MIN_QUERY, MEDIUM_MIN_QUERY } from '../styles/breakpoints';


// const style = css({
//   background: colors.LIGHT_PRIMARY_COLOR,
//   marginTop: '15px',
//   marginLeft: '20px',
//   marginRight: '20px',
//   display: 'flex',
//   justifyContent: 'center',
//   padding: '10px',
//   [DESKTOP_MIN_QUERY]: {
//
//   },
//   [MEDIUM_MIN_QUERY]: {
//
//   },
// });

const logoStyles = css({
  background: 'url(/static/claylogo-graphic.png) 50% no-repeat',
  backgroundSize: 'cover',
  height: '130px',
  width: '130px',
  margin: 'auto auto 10px',
});

const headerStyle = css.merge({
  position: 'relative',
  background: colors.LIGHT_PRIMARY_COLOR,
},
  css.select(' .mdl-layout__header-row', {
    padding: 0,
    justifyContent: 'center',
  })
);

const logoRowStyle = css({
  minHeight: '200px',
});

const titleStyles = css({
  fontSize: '1.9em',
});

const navigationStyles = css.merge({
  backgroundColor: 'rgba(0, 0, 0, 0.08)',
  textTransform: 'uppercase',
  height: '45px',
}, css.select(' .mdl-navigation', {
  textAlign: 'center',
  maxWidth: '900px',
  width: '100%',
}), css.select(' .mdl-navigation__link', {
  flex: 1,
  lineHeight: '42px',
}), css.select(' .is-active', {
  position: 'relative',
  fontWeight: 'bold',
}), css.select(' .is-active:after', {
  content: '""',
  width: '70%',
  height: '2px',
  display: 'block',
  position: 'absolute',
  bottom: '0',
  backgroundColor: colors.ACCENT_COLOR,
  left: '15%',
})
);

// const headerStyle = css({
//   color: colors.PRIMARY_TEXT_COLOR,
//   fontSize: '4em',
// });

const Header = () => (
  <header className={`mdl-layout__header mdl-layout__header--waterfall ${headerStyle}`}>
    <div className={`mdl-layout__header-row ${logoRowStyle}`}>
      <span className="mdl-layout__title">
        <div className={logoStyles}>
          <span className={SR_ONLY}>ABC</span>
        </div>
        <span className={`mdl-layout__title ${titleStyles}`}>Clay Diffrient</span>
      </span>
    </div>
    <div className={`mdl-layout__header-row ${navigationStyles} mdl-layout--large-screen-only`}>
      <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
        <a className="mdl-navigation__link is-active" href="index.html">Portfolio</a>
        <a className="mdl-navigation__link" href="blog.html">Blog</a>
        <a className="mdl-navigation__link" href="about.html">About</a>
        <a className="mdl-navigation__link" href="contact.html">Contact</a>
      </nav>
    </div>
  </header>


);

/* <div className={style}>
  <img
    className={imageStyle}
    src="/static/claylogo-graphic.png"
    alt="Clay Diffrient's Logo"
  />
  <h1 className={headerStyle}>Clay Diffrient</h1>
</div>*/

export default Header;
