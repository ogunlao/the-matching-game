import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Stats from "../Stats";
import Game from "../Game";
import gameIdClassBox from '../../Utils';

export default class App extends Component {
  state = {
    gameIdClassBox
  };

  render() {
    return (
      <div className="container">
        <h1 className="game-title">Matching Game</h1>
        <Stats />
        <Game boxes={this.state.boxes}/>
      </div>
    );
  }
}
