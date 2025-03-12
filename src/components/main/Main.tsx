import { useState } from 'react';
import Die from '../die-item/Die';
import './Main.css';

function MainContent() {
  const [ diceNumbers, setDiceNumbers ] = useState(fillArrayWithRandomNumbers(10));

  const diceElements = diceNumbers.map((itemNumber, index) => (
    <Die key={`${index}-${itemNumber}`}
      name={`${itemNumber}`}
    />
  ));

  function fillArrayWithRandomNumbers(length: number): number[] {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.ceil(Math.random() * 6));
    }
    return array;
  }

  function rerollDice() {
    setDiceNumbers(fillArrayWithRandomNumbers(10));
  }

  return (
    <main className='flex-grow-1'>
      <div>
        <h1 className='centered'>Tenzies game</h1>
      </div>
      <div className='grid-container die-container'>
        {diceElements}
      </div>
      <div className="button-container">
        <button className='mat-button btn-primary'
          onClick={rerollDice}>Roll</button>
      </div>
    </main>
  );
}

export default MainContent;