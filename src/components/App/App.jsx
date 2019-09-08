import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Stats from "../Stats";
import Game from "../Game";
import boxes, { timer } from "../../Utils";

class App extends Component {
  state = {
    boxes: boxes(),
    startGame: false,
    numOfMoves: 0,
    gameOver: false,
    numOpenBoxes: 0,
    previousGuessedBox: null,
    timerId: 0
  };

  updateGame = (openStateBoxes, previousGuessedBox, openBox) => {
      const boxes = [...this.state.boxes];
      const indexOpenBox = boxes.indexOf(openBox);
      boxes[indexOpenBox].open = false;
      if (previousGuessedBox) {
        const indexPrevBox = boxes.indexOf(previousGuessedBox);
        boxes[indexPrevBox].open = false;
      }
      this.setState({
        boxes,
        previousGuessedBox: null
      });
    
  };

  checkIfSimilarBoxOpen = (openBox) => {
    const previousGuessedBox = this.state.previousGuessedBox;

    if (this.state.startGame) {
      const openStateBoxes = this.state.boxes.filter(box=>
        (box.id !== openBox.id) && (box.class === openBox.class) && box.open
      )
      /* this.setState({
        previousGuessedBox : openBox,
      }) */
      console.log(openStateBoxes)
      if (openStateBoxes === undefined || openStateBoxes.length === 0){
        this.updateGame(
          openStateBoxes, 
          previousGuessedBox, 
          openBox
          );
      }
    } else {
      this.setState(
        {
          startGame : true,
          previousGuessedBox : openBox,
        });
    }
    
  }

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
    setTimeout(() => this.checkIfSimilarBoxOpen(box), 800);
  };

  handleReset = () => {
    clearTimeout(this.state.timerId);
    this.setState({
      boxes: boxes(),
      firstGuessedBox: false,
      numOfMoves: 0,
      numOpenBoxes: 0,
      timerId: timer,
      startGame: false,
    });
    
  };

  handleGameOver = () => {
    this.setState({ gameOver: true });
  };

  componentDidMount() {
    this.setState({timerId : timer}); // Start time
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
          numOfMoves={numOfMoves}
        />
      </div>
    );
  }
}

export default  App;