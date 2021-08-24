import React from 'react';
import Duck from './Duckie.jsx';
import css from '../dist/style-sheet.css';
import Advise from './Advise.jsx';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useReducer, useRef, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: (state.count = 0) };
    default:
      throw new Error();
  }
}

const App = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [animate, setAnimate] = useState(false);
  const isMounting = useRef(true);
  // const [count2, setCount2] = useState(0);
  useEffect(() => {
    if (isMounting.current) {
      //No animation on initial mount
      isMounting.current = false;
    } else {
      setAnimate(true); // Set animate to true
    }
  }, [state.count]); //Only run useEffect if Count has changed

  const className = `duck-container ${
    animate ? 'duck-shake' : 'duck-container'
  }`;
  const incrementAnimate = () => {
    dispatch({ type: 'increment' });
    setAnimate(false);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="header" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Advise className="chat" count={state.count} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <div className={className}>
            <Duck></Duck>
          </div>
          <div className="button-container">
            <div>
              <button className="button-more" onClick={incrementAnimate}>
                Quak!
              </button>
            </div>
            <div>
              <button
                className="button-reset"
                onClick={() => dispatch({ type: 'decrement' })}
              >
                Start Over
              </button>
              {/* <button onClick={setCount2}></button> */}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
