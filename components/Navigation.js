import React from 'react';
import css from 'next/css';
import Link from 'next/link';
import classnames from 'classnames';
import * as colors from '../styles/colorVariables';

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

const LINKS = [{
  text: 'Portfolio',
  route: '/',
}, {
  text: 'Blog',
  route: '/blog',
}, {
  text: 'About',
  route: '/about',
}, {
  text: 'Contact',
  route: '/contact',
},
];

const Navigation = (props, context) => {
  const activeRoute = context.router.route;

  const navigationClasses = classnames({
    'mdl-layout__header-row': !props.isDrawer,
    'mdl-layout--large-screen-only': !props.isDrawer,
    [navigationStyles]: !props.isDrawer,
    'mdl-layout__drawer': props.isDrawer,
    'mdl-layout--small-screen-only': props.isDrawer,
  });

  return (
    <div className={`${navigationClasses}`}>
      <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
        {
            LINKS.map((l) => {
              const activeClass = (l.route === activeRoute) ? 'is-active' : '';
              return (
                <Link key={l.route} href={l.route}>
                  <a className={`mdl-navigation__link ${activeClass}`}>{l.text}</a>
                </Link>
              );
            })
          }
      </nav>
    </div>
  );
};

Navigation.contextTypes = {
  router: React.PropTypes.object,
};

Navigation.propTypes = {
  isDrawer: React.PropTypes.bool,
};

export default Navigation;
