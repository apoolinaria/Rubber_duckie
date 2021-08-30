import React from 'react';
import data from './duckie_advise.js';

import { useState, useReducer } from 'react';

const Advise = (props) => {
  console.log('advise', props.advise);
  return (
    <div className="mine messages">
      <p className="message last">{props.advise}</p>
    </div>
  );
};
export default Advise;
