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
          <span className="game-stats__time">01:21</span>
          <span className="game-stats__moves">8 Moves</span>
          <span className="game-stats__replay">
            <i className="fas fa-redo"></i>
          </span>
        </div>
    );
  }
}
