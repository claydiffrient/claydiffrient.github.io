import React from 'react';
import css, {insertRule} from 'next/css';
import Head from 'next/head';
import Header from '../components/Header';
import * as colors from '../styles/colorVariables';

insertRule(`html, body { background: ${colors.DARK_PRIMARY_COLOR}}`)
insertRule(`html, body { font-family: 'Noto Sans', sans-serif}`);

const style = css({
})

const HeadMaterial = () => (
  <Head>
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet" />
    <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192"  href="/static/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
    <link rel="manifest" href="/static/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);

const Index = () => (
  <div className={style}>
    <HeadMaterial />
    <Header />
  </div>
);


export default Index;
