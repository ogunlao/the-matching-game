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

  updateGame = (previousGuessedBox, openBox) => {
    const boxes = [...this.state.boxes];
    const indexOpenBox = boxes.indexOf(openBox);
    boxes[indexOpenBox].open = false;
    if (previousGuessedBox) {
      const indexPrevBox = boxes.indexOf(previousGuessedBox);
      if (indexPrevBox){
      boxes[indexPrevBox].open = false;
      }
    }
    this.setState({
      boxes,
      previousGuessedBox: null
    });
  };

  checkIfSimilarBoxOpen = openBox => {
    const previousGuessedBox = this.state.previousGuessedBox;

    // If game has started, check for similar box else start game
    if (this.state.startGame) {
      // Look for box with similar icon and check if it's open
      const openStateBoxes = this.state.boxes.filter(
        box => box.id !== openBox.id && box.class === openBox.class && box.open
      );
      // If it isnt open, close both boxes
      if (openStateBoxes === undefined || openStateBoxes.length === 0) {
        this.updateGame(previousGuessedBox, openBox);
      }
    } else {
      this.setState({
        startGame: true,
        previousGuessedBox: openBox
      });
    }
  };

  getNumOpenBoxes = boxes => {
    const openBoxes = boxes.filter(box => box.open === true);
    return openBoxes.length;
  };

  handleToggle = box => {
    const boxes = [...this.state.boxes];
    let numOfMoves = this.state.numOfMoves;
    numOfMoves++; // Increase  number of boves
    const index = boxes.indexOf(box);
    boxes[index].open = !box.open;
    // Toggle box, and perform other operations
    this.setState({
      boxes,
      numOfMoves,
      numOpenBoxes: this.getNumOpenBoxes(boxes)
    });
    // Delay so box doesnt switch back without showing the player the icon
    setTimeout(() => this.checkIfSimilarBoxOpen(box), 800);
  };

  handleReset = () => {
    clearTimeout(this.state.timerId);
    this.setState({
      boxes: boxes(),
      firstGuessedBox: false,
      numOfMoves: 0,
      numOpenBoxes: 0,
      startGame: false
    });
  };

  handleGameOver = () => {
    this.setState({ gameOver: true });
  };

  componentDidMount() {
    // Start time
    this.startGame && this.setState({ timerId: timer });
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
        {!(numOpenBoxes === 16) && (
          <div className="game-description">
            <p>
              Select two similar cards from the 16 boxes available. Try to
              remember positions of cards as you open and finish game in the
              lowest number of moves. Goodluck!!
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;