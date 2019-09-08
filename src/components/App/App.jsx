import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Stats from "../Stats";
import Game from "../Game";
import boxes, { timer } from "../../Utils";

export default class App extends Component {
  state = {
    boxes: boxes(),
    firstGuessedBox: null,
    numOfMoves: 0,
    gameOver: false,
    numOpenBoxes: 0
  };

  compareOpenBoxes = box => {
    let firstGuessedBox = this.state.firstGuessedBox;
    // check if a box is previously opened
    if (!firstGuessedBox) {
      this.setState({ firstGuessedBox: box });
    } else {
      if (firstGuessedBox.class === box.class) {
        this.setState({ firstGuessedBox: null });
      } else {
        const boxes = this.state.boxes.map(stateBox => {
          if (stateBox === firstGuessedBox || stateBox === box) {
            stateBox.open = false;
          }
          return stateBox;
        });

        this.setState({ boxes, firstGuessedBox: null });
      }
    }
  };

  getNumOpenBoxes = boxes => {
    const openBoxes = boxes.filter(box => box.open === true);
    return openBoxes.length;
  };

  handleToggle = box => {
    const boxes = [...this.state.boxes];
    let numOfMoves = this.state.numOfMoves;
    numOfMoves++;
    const index = boxes.indexOf(box);
    boxes[index].open = !box.open;
    this.setState({
      boxes,
      numOfMoves,
      numOpenBoxes: this.getNumOpenBoxes(boxes)
    });
    setTimeout(() => this.compareOpenBoxes(box), 800);
  };

  handleReset = () => {
    timer(true);
    this.setState({
      boxes: boxes(),
      firstGuessedBox: false,
      numOfMoves: 0,
      numOpenBoxes: 0
    });
  };

  handleGameOver = () => {
    this.setState({ gameOver: true });
  };

  componentDidMount() {
    timer();
  }

  render() {
    const { boxes, numOfMoves, numOpenBoxes } = this.state;
    return (
      <div className="container">
        <h1 className="game-title">Matching Game</h1>
        <Stats numOfMoves={numOfMoves} onReset={this.handleReset} />
        <Game
          boxes={boxes}
          onToggle={this.handleToggle}
          numOpenBoxes={numOpenBoxes}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}
