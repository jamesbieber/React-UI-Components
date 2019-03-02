import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const actionButtons = ['clear', '0'];
const numbers = ['7','8','9','4','5','6','1','2','3'];
const symbols = ['÷','×','-','+','='];



const App = () => {
  return (
    <div id="calculator">
      <div class="row-0 row">
        <CalculatorDisplay />
      </div>

      <div class="row-1 row">
        <ActionButton buttonStyle="action-button" text={actionButtons[0]} />
        <NumberButton buttonStyle="red-button" text={symbols[0]} />
      </div>

      <div class="row-2 row">
        <NumberButton buttonStyle="white-button" text={numbers[0]} />
        <NumberButton buttonStyle="white-button" text={numbers[1]} />
        <NumberButton buttonStyle="white-button" text={numbers[2]} />
        <NumberButton buttonStyle="red-button" text={symbols[1]} />
      </div>

      <div class="row-3 row">
        <NumberButton buttonStyle="white-button" text={numbers[3]} />
        <NumberButton buttonStyle="white-button" text={numbers[4]} />
        <NumberButton buttonStyle="white-button" text={numbers[5]} />
        <NumberButton buttonStyle="red-button" text={symbols[2]} />
      </div>

      <div class="row-4 row">
        <NumberButton buttonStyle="white-button" text={numbers[6]} />
        <NumberButton buttonStyle="white-button" text={numbers[7]} />
        <NumberButton buttonStyle="white-button" text={numbers[8]} />
        <NumberButton buttonStyle="red-button" text={symbols[3]} />
      </div>

      <div class="row-5 row">
        <ActionButton buttonStyle="action-button" text={actionButtons[1]} />
        <NumberButton buttonStyle="red-button" text={symbols[4]} />
      </div>

    </div>
  );
};

export default App;
