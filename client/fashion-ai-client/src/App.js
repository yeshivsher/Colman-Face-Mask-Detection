import logo from './logo.svg';
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ShoeImage from './images/noShoe.png'

const secondary_color = '#687cff'
const font_family_style = 'cursive'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute',
    height: '100%',
    width: '100%',
    background: 'aliceblue',
    flexDirection: 'column'
  },
  header: {
    width: '100%',
    textAlign: 'center'
  },
  headerText: {
    fontFamily: font_family_style
  },
  paper: {
    width: '80%',
    height: '60%',
    marginLeft: '10%',
    display: 'flex',
    justifyContent: 'center'
  },
  img: {
    width: '15%',
    height: '30%',
    alignSelf: 'center'
  },
  footer: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    color: secondary_color
  },
  footerText: {
    fontSize: 16,
    fontFamily: font_family_style
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="header" className={classes.header}>
        <h1 className={classes.headerText}>Fashion AI</h1>
      </div>
      <Paper className={classes.paper} >
        <img
          id="shoe-image"
          alt='shoe-image'
          src={ShoeImage}
          className={classes.img}
        ></img>
      </Paper>
      <div id="footer" className={classes.footer}>
        <h1 className={classes.footerText}>Developted by Colman studens at 2020.</h1>
      </div>
    </div>
  );
}

export default App;
