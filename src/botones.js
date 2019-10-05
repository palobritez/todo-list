import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MaterialTableDemo from './tasklist';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));
  
  export default function ContainedButtons() {
    const classes = useStyles();
    return (
      <div>
        <Button variant="contained" className={classes.button}>
        <Link to="/">Home</Link>
        </Button>
  
        <Button variant="contained" className={classes.button}>
        <Link to="/about">About</Link>
        </Button>
  
        <Button variant="contained" className={classes.button}>
        <Link to="/task">Task</Link>
        </Button>
        </div>
    );
    }
  
    function SimpleContainer() {
      return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
  <MaterialTableDemo/>
          </Container>
        </React.Fragment>
      );
    }
    export {SimpleContainer};

    