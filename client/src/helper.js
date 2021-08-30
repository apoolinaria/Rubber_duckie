import data from './duckie_advise.js';
import _ from 'underscore';

let hints = [];
export function pickHint = (count, data, name) => {
  if (count <= 5) {
    return _.where(data.advise, { topic: 'general' });
  } else if (count > 5 && count < 15) {
    let arr = _.where(data.advise, { topic: 'functions' });
    let hints = arr.map((hint) => {
      let replaced = hint.text.replace('function', name || 'function');
      hint.text = replaced;
      return hint;
    });
    return hints;
  } else if (count >= 15) {
    return [{ id: 1000, text: 'Go to google' }];
  }
};
