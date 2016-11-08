import React from 'react';
import css from 'next/css';
import * as colors from '../styles/colorVariables';

const style = css({
  display: 'flex',
  justifyContent: 'center',
  marginLeft: '20px',
  marginRight: '20px',
  marginTop: '30px',
});


const CardContainer = (props) => {
  return (
    <div className={style}>
      {props.children}
    </div>
  );
};

export default CardContainer;
