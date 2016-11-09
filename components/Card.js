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


const Card = props => (
  <div className={`mdl-card mdl-shadow--2dp ${style}`}>
    <div className="mdl-card__title mdl-card--expand">
      <h2 className="mdl-card__title-text">{props.title}</h2>
    </div>
    <div className="mdl-card__supporting-text">
      {props.mainText}
    </div>
  </div>
);

Card.propTypes = {
  title: React.PropTypes.string.isRequired,
  mainText: React.PropTypes.string.isRequired,
};

export default Card;
