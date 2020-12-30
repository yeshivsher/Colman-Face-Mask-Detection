import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ShoeImage from './images/noShoe.png'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import {
  Send as SendIcon,
  List as ListIcon

} from '@material-ui/icons';

const primary_color = '#cee1f4'
const secondary_color = '#687cff'
const green_color = '#96de5f'
const font_family_style = 'cursive'

const typesList = [
  'Boots',
  'Sandals',
  'Slippers',
  'shoes'
]

const subTypesList = [
  'Boat Shoes',
  'Clogs and Mules',
  'Crib Shoes',
  'Firstwalker',
  'Flats',
  'Heels',
  'Loafers',
  'Oxfords',
  'Prewalker',
  'Sneakers and Athletic Shoes'
]

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
  paperOptions: {
    width: '80%',
    marginLeft: '10%',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-between'
  },
  paperOptionsButtons: {
    display: 'flex',
    height: 'fit-content',
    width: '25.5%',
    background: primary_color
  },
  buttons: {
    fontWeight: 'bold',
    width: '100%',
    background: primary_color
  },
  buttonsIcons: {
    marginLeft: 30,
    alignSelf: 'center'
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl_sub, setAnchorEl_sub] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick_sub = (event) => {
    setAnchorEl_sub(event.currentTarget);
  };

  const handleClose_sub = () => {
    setAnchorEl_sub(null);
  };

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
      <div className={classes.paperOptions}>
        <Paper className={classes.paperOptionsButtons} >
          <ListIcon className={classes.buttonsIcons} />
          <Button className={classes.buttons} aria-controls="types" aria-haspopup="true" onClick={handleClick}>
            type
          </Button>
          <Menu
            id="types"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {
              typesList.map((e, index) => {
                return <MenuItem key={index+'-type'} onClick={handleClose}>{e}</MenuItem>
              })
            }
          </Menu>
        </Paper>
        <Paper className={classes.paperOptionsButtons}>
          <ListIcon className={classes.buttonsIcons} />
          <Button className={classes.buttons} aria-controls="sub-types" aria-haspopup="true" onClick={handleClick_sub}>
            Sub type
      </Button>
          <Menu
            id="sub-types"
            anchorEl={anchorEl_sub}
            keepMounted
            open={Boolean(anchorEl_sub)}
            onClose={handleClose_sub}
          >
            {
              subTypesList.map((e, index) => {
                return <MenuItem key={index+'-type'} onClick={handleClose_sub}>{e}</MenuItem>
              })
            }
          </Menu>
        </Paper>
        <Paper className={classes.paperOptionsButtons} style={{ width: '47.2%' }}>
          <Button className={classes.buttons}
            variant="contained"
            // onClick={handleClick}
            endIcon={<SendIcon style={{ marginLeft: 30 }} />}
            style={{ background: green_color, color: 'white' }}
          >
            Send
      </Button>
        </Paper >
      </div>
      <div id="footer" className={classes.footer}>
        <h1 className={classes.footerText}>Developted by Colman studens at 2020.</h1>
      </div>
    </div>
  );
}

export default App;
