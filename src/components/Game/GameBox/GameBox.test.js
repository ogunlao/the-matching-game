import React from 'react';
import ReactDOM from 'react-dom';
import GameBox from './GameBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GameBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
