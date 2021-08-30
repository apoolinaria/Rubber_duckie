import React from 'react';
import data from './duckie_advise.js';
import Duck from './Duckie.jsx';
import css from '../dist/style-sheet.css';
import Advise from './Advise.jsx';
import Grid from '@material-ui/core/Grid';
import _ from 'underscore';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useReducer, useRef, useEffect } from 'react';
import NameModal from './NameModal.jsx';
import GoogleModal from './GoogleModal.jsx';
import { ducks } from './ducks.js';
import Header from './Header.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const initialState = { count: 0 };

let hints = [];
const pickHint = (count, data, name, type) => {
  if (count === 0) {
    let arr = _.where(data.advise, { topic: 'hi' });
    console.log('before replcae', arr);
    console.log('to be replaced with', type);
    let hints = arr.map((hint) => {
      let replaced = hint.text.replace('type', type || 'Ducky');
      hint.text = replaced;
      console.log('after replace', hint);
      return hint;
    });
    return hints[0];
  }
  if (count <= 5) {
    return _.where(data.advise, { topic: 'general' })[count];
  } else if (count > 5 && count < 15) {
    let arr = _.where(data.advise, { topic: 'functions' });
    let hints = arr.map((hint) => {
      let replaced = hint.text.replace('function', name || 'function');
      hint.text = replaced;
      return hint;
    });
    return hints[count - 5];
  } else if (count >= 15) {
    return [{ id: 1000, text: 'Go to google' }];
  }
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'reset':
      return { count: (state.count = 0) };
    default:
      throw new Error();
  }
}

const App = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [animate, setAnimate] = useState(false);
  const [name, setFuncName] = useState('');
  const [currentDuck, setDuck] = useState(
    ducks[Math.floor(Math.random() * ducks.length)]
  );
  const [hint, setAdvise] = useState('hfgdhjfgakjdg');
  const isMounting = useRef(true);
  const [newSession, setSession] = useState(1);

  console.log('type', currentDuck);
  const clearState = () => {
    setFuncName('');
    dispatch({ type: 'reset' });
    setAdvise('');
    let current = () => {
      return ducks[Math.floor(Math.random() * ducks.length)];
    };
    setDuck(current());
  };

  useEffect(() => {
    if (isMounting.current) {
      isMounting.current = false;
    } else {
      setAnimate(true);
    }
  }, [state.count]); //Only run useEffect if Count has changed

  const incrementAnimate = () => {
    dispatch({ type: 'increment' });
    setAnimate(false);
  };

  const setName = (name) => {
    setFuncName(name);
  };

  // useEffect(() => {
  //   let current = ducks[Math.floor(Math.random() * ducks.length)];

  //   setDuck(current);
  //   setSession(2);
  // }, [newSession]);

  useEffect(() => {
    let currentHint = pickHint(state.count, data, name, currentDuck.type);
    setAdvise(currentHint.text);
  }, [state.count]);

  useEffect(() => {
    let currentHint = pickHint(state.count, data, name, currentDuck.type);
    setAdvise(currentHint);
  });
  useEffect(() => {
    console.log('in useeffect duck', currentDuck.type);
    let currentHint = pickHint(0, data, name, currentDuck.type);
    setAdvise(currentHint);
  }, [currentDuck]);
  const className = `duck-container ${
    animate ? 'duck-shake' : 'duck-container'
  }`;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Advise className="chat" advise={hint.text} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <div className={className}>
            <Duck duck={currentDuck.file}></Duck>
          </div>
          <div className="button-container">
            <div>
              <button className="button-more" onClick={incrementAnimate}>
                Quak!
              </button>
            </div>
            <div>
              <button className="button-reset" onClick={clearState}>
                Start Over
              </button>
            </div>
          </div>
        </Grid>
        {state.count === 5 ? <NameModal submit={setName} /> : null}
        {state.count === 14 ? <GoogleModal /> : null}
      </Grid>
    </div>
  );
};
export default App;
