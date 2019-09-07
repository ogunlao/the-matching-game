import React, { Component } from 'react';
import GameBox from '../Game/GameBox';
import './Game.css';

export default class Game extends Component {

  displayClass = (box) => box.open ? box.class : ""
  render() {
    const boxes = this.props.boxes.map(box => (
      <GameBox key={box.id} box={box} onToggle={this.props.onToggle} />
    ));

    return (
      <div className="game-container">
        {boxes}
      </div>
    );
  }
}
