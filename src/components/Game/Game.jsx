import React, { Component } from 'react';
import GameBox from '../Game/GameBox';
import './Game.css';

export default class Game extends Component {
  state = {
    boxes: [
      { id: 1, class:"far fa-paper-plane" },
      { id: 2, class:  "far fa-paper-plane"},
      { id: 3, class: "fas fa-anchor"},
      { id: 4, class:  "fas fa-anchor"},
      { id: 5, class: "fas fa-anchor" },
      { id: 6, class: "far fa-paper-plane" },
      { id: 7, class: "fas fa-anchor" },
      { id: 8, class: "" },
      { id: 9, class: "far fa-paper-plane" },
      { id: 10, class: "" },
      { id: 11, class: "" },
      { id: 12, class: "fas fa-anchor" },
      { id: 13, class: "far fa-paper-plane" },
      { id: 14, class: "" },
      { id: 15, class: "" },
      { id: 16, class: "far fa-paper-plane" }
    ]
  };

  render() {
    const boxes = this.state.boxes.map(
      box => <GameBox key={box.id} class={box.class} />
      );
      
    return (
      <div className="game-container">
        {boxes}
      </div>
    );
  }
}
