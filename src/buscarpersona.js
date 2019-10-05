import React, { useState, useEffect } from "react";
import { forwardRef } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Home() {
  return <SearchPeople/>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}



function LlenarTabla() {

  return (
    <List>
    {this.state.people.map(i => {
    return  (
        <ListItem>
        {i.name}
        </ListItem>
      )
    })}
  </List>

)
}

 class SearchPeople extends React.Component {

  state = {
    people:[]

}


  render(){
  console.log('render');
  const{people} = this.state;
  console.log(people);

  return(
    <List>
      {this.state.people.map(i => {
      return  (
          <ListItem>
          {i.name}
          </ListItem>
        )
      })}
    </List>

  )
  }

}
  

export default SearchPeople;
