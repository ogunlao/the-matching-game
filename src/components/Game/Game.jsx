import React, { Component } from 'react';
import GameBox from '../Game/GameBox';
import './Game.css';

export default class Game extends Component {
  render() {
    const { boxes, numOpenBoxes, onReset } = this.props;

    const renderedBoxes = boxes.map(box => (
      <GameBox 
        key={box.id} 
        box={box} 
        onToggle={this.props.onToggle} 
      />
    ));

    return (
      <React.Fragment>
        {!(numOpenBoxes === 16) ? (
          <div className="game-container">{renderedBoxes}</div>
        ) : (
          <React.Fragment>
            <div className="blur game-container">{renderedBoxes}</div>
            <div className="game-over">
              Game Over
              <p className="game-stats__replay" onClick={onReset}>
                <i className="fas fa-redo"></i>
              </p>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

/** 
 * const Game = ({boxes, onToggle}) => {
 * const boxes = boxes.map(box => (
      <GameBox key={box.id} box={box} onToggle={onToggle} />
    ));
 *  return (
 *  

    return (
      <div className="game-container">
        {boxes}
      </div>
    );
 * )
 * }
 */