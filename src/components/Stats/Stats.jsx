import React from 'react'
import './Stats.css';


const Stats = ({numOfMoves, onReset}) => {
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
          <span className="game-stats__moves">{numOfMoves} Moves</span>
          <span className="game-stats__replay" onClick={onReset}>
            <i className="fas fa-redo"></i>
          </span>
        </div>
    );
  }

export default Stats;