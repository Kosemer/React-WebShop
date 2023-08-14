import React from 'react';
import classes from './Card.module.css';

function Card(props) {
  const cardStyle = {
    padding: props.padding || '1rem', // Alapértelmezett padding vagy a kapott padding érték
  };

  return (
    <div className={`${classes.card} ${props.className}`} style={cardStyle}>
      {props.children}
    </div>
  );
}

export default Card;
