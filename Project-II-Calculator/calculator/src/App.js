import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton'

const actionButtons = ['clear', '0'];
const numbers = ['3','2','1','6','5','4','9','8','7'];
const symbols = ['÷','×','-','+','='];

const App = () => {
  return (
    <div id="calculator">
      {actionButtons.map((button, index) => <ActionButton buttonStyle="action-button" text={actionButtons[index]} />)}

      <div id="red-white-buttons">
        {numbers.map((button, index) => <NumberButton buttonStyle="white-button" text={numbers[index]} />)}
        {symbols.map((button, index) => <NumberButton buttonStyle="red-button" text={symbols[index]} />)}
      </div>

    </div>
  );
};

export default App;
