import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchPeople from './buscarpersona';
import ContainedButtons from './botones';
import { SimpleContainer } from "./botones";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



function Home() {
  return <SearchPeople/>;
}

function About() {
  return <h2>About</h2>;
}

function Task() {
  return <><h2>Tareas</h2><SimpleContainer/></>;
}


function App() {
  return (
    <div className="App">
      
      <Router>
        <header className="App-header">
          
          <p>
          TO DO LIST
          <ContainedButtons/>
          </p>
        </header>    


        <Route path="/" exact component={Home}/>
           
        <Route path="/about" component={About}/>
        <Route path="/task" component={Task}/>

      </Router>
    </div>

  );
}
export default App;
