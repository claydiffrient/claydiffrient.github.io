import React from 'react';
import css from 'next/css';
import * as colors from '../styles/colorVariables';

const style = css({
  background: colors.LIGHT_PRIMARY_COLOR,
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
  width: '300px',
  height: '300px',
  margin: '10px',
});


const Card = (props) => {
  return (
    <div className={style}>
      ABC
    </div>
  );
};

export default Card;
