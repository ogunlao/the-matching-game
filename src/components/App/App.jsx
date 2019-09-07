import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Stats from "../Stats";
import Game from "../Game";
import boxes from '../../Utils';

export default class App extends Component {
  state = {
    boxes,
    firstGuessedBox:null,
    numOfMoves: 0
  };

  compareOpenBoxes = (box)=> {
    let firstGuessedBox = this.state.firstGuessedBox;
    // check if a box if previously opened
    if (!firstGuessedBox){
      this.setState({firstGuessedBox:box})
    } else {
      if (firstGuessedBox.class === box.class ){
        this.setState({firstGuessedBox:null})
      } else {
          const boxes = this.state.boxes.map(stateBox=>{
            if ((stateBox === firstGuessedBox) || (stateBox === box)){
              stateBox.open=false
            }
            return stateBox;
          });

          this.setState({ boxes, firstGuessedBox:null });
        }
    }
  }

  handleToggle = (box) => {
    const boxes = [...this.state.boxes];
    let numOfMoves = this.state.numOfMoves;
    numOfMoves++
    const index = boxes.indexOf(box);
    boxes[index].open = !box.open;
    this.setState({ boxes, numOfMoves });
    setTimeout(
      ()=>this.compareOpenBoxes(box),
      700
    );
  };

  handleReset = ()=>{
    const boxes = this.state.boxes.map((box)=>
    {
      box.open=false;
      return box;
    })
    this.setState(
      {
        boxes, 
        firstGuessedBox:false,
        numOfMoves:0
      });
  }

  render() {
    const boxes = this.state.boxes;

    return (
      <div className="container">
        <h1 className="game-title">Matching Game</h1>
        <Stats 
          numOfMoves={this.state.numOfMoves}
          onReset={this.handleReset}
        />
        <Game 
          boxes={boxes} 
          onToggle={this.handleToggle} 
        />
      </div>
    );
  }
}
