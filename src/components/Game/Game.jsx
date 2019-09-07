import React, { Component } from 'react';
import GameBox from '../Game/GameBox';
import './Game.css';

export default class Game extends Component {
  render() {
    const boxes = this.props.boxes.map(
      box => <GameBox key={box.id} class={box.class} />
      );

    return (
      <div className="game-container">
        {boxes}
      </div>
    );
  }
}
