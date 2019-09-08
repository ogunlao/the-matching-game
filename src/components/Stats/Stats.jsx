import React, { Component } from 'react'
import './Stats.css';


export default class Stats extends Component {
  render() {
    return (
        <div className="game-stats">
          <span className="game-stats__star">
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </span>
          <span className="game-stats__time">
            <span id="minutes"></span>
            :
            <span id="seconds"></span>
          </span>
          <span className="game-stats__moves">{this.props.numOfMoves} Moves</span>
          <span className="game-stats__replay" onClick={this.props.onReset}>
            <i className="fas fa-redo"></i>
          </span>
        </div>
    );
  }
}
