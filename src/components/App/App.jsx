import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import Stats from '../Stats';
import Game from '../Game';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  render() {
    return (
      <div className="container">
        <h1 className="game-title">Matching Game</h1>
        <Stats />
        <Game />
      </div>
    );
  }
}

