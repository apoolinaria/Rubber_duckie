import React from 'react';
import data from './duckie_advise.js';
import _ from 'underscore';
import { useState, useReducer } from 'react';

let hints = [];
const pickHint = (count, data) => {
  console.log('count', count);
  if (count <= 5) {
    return _.where(data.advise, { topic: 'general' });
  } else if (count > 5 && count < 15) {
    return _.where(data.advise, { topic: 'function' });
  } else if (count >= 15) {
    return [{ id: 1000, text: 'Go to google' }];
  }
};

const Advise = (props) => {
  let currentHint = pickHint(props.count, data);

  const randomHint =
    currentHint[Math.floor(Math.random() * currentHint.length)].text;

  return (
    <div className="mine messages">
      <p className="message last">{randomHint}</p>
    </div>
  );
};
export default Advise;
