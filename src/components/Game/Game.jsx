import React from 'react';
import GameBox from '../Game/GameBox';
import './Game.css';

const Game =  ({ boxes, numOpenBoxes, onReset, onToggle }) => {
    const renderedBoxes = boxes.map(box => (
      <GameBox 
        key={box.id} 
        box={box} 
        onToggle={onToggle} 
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


  export default Game;