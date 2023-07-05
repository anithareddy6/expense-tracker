//whenever  we created card.js we also include css file like this below for all

import React from "react";
import './Card.css';

const Card=(props)=> {
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;
}

export default Card;