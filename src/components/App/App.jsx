import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Stats from "../Stats";
import Game from "../Game";
import boxes from '../../Utils';

export default class App extends Component {
  state = {
    boxes,
    firstGuessedBox:null
  };

  // check previous box

  //compare with newbox

  //switch both of keep both


  compareOpenBoxes = (box)=> {
    let firstGuessedBox = this.state.firstGuessedBox;
    // check if a box if previously opened
    if (!firstGuessedBox){
      this.setState({firstGuessedBox:box})
    } else {
      if (firstGuessedBox.class === box.class ){
        return;
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
    const index = boxes.indexOf(box);
    boxes[index].open = !box.open;
    this.setState({ boxes });

    this.compareOpenBoxes(box);
  };

  render() {
    const boxes = this.state.boxes;

    return (
      <div className="container">
        <h1 className="game-title">Matching Game</h1>
        <Stats />
        <Game boxes={boxes} onToggle={this.handleToggle} />
      </div>
    );
  }
}
