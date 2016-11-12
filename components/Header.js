import React from 'react';
import css, { insertRule } from 'next/css';
import Head from 'next/head';
import * as colors from '../styles/colorVariables';
import { SR_ONLY } from '../styles/utilities';
import Navigation from './Navigation';

insertRule(`html, body { background: ${colors.DARK_PRIMARY_COLOR}}`);

const HeadMaterial = () => (
  <Head>
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" href="https://code.getmdl.io/1.2.1/material.green-blue.min.css" />
    <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
    <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/static/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
    <link rel="manifest" href="/static/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script defer src="https://code.getmdl.io/1.2.1/material.min.js" />
  </Head>
);

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

const Header = () => (
  <header className={`mdl-layout__header mdl-layout__header--waterfall ${headerStyle}`}>
    <HeadMaterial />
    <div className={`mdl-layout__header-row ${logoRowStyle}`}>
      <span className="mdl-layout__title">
        <div className={logoStyles}>
          <span className={SR_ONLY}>Clay Diffrient's Logo</span>
        </div>
        <span className={`mdl-layout__title ${titleStyles}`}>Clay Diffrient</span>
      </span>
    </div>
    <Navigation />
  </header>


);

export default Header;
