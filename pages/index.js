import React from 'react';
import css, {insertRule} from 'next/css';
import Head from 'next/head';
import Header from '../components/Header';
import * as colors from '../styles/colorVariables';

insertRule(`html, body { background: ${colors.DARK_PRIMARY_COLOR}}`)
insertRule(`html, body { font-family: 'Noto Sans', sans-serif}`);

const style = css({
})

const Index = () => (
  <div className={style}>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Header />
  </div>
);


export default Index;
