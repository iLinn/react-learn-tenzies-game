import { useState } from 'react';
import Confetti from 'react-confetti'
import Die from '../die-item/Die';
import './Main.css';

export interface DiceStatus {
  value: number;
  isHeld: boolean;
  id: string;
}

function MainContent() {
  const [ diceStatuses, setDiceStatuses ] = useState(prepareDiceCollection(fillArrayWithDiceNumbers(10)));
  const width = window.innerWidth;
  const height = window.innerHeight;

  const diceElements = diceStatuses.map(diceStatus => (
    <Die key={diceStatus.id}
      name={`${diceStatus.value}`}
      isHeld={diceStatus.isHeld}
      holdDice={hold}
      id={diceStatus.id}
    />
  ));

  const isGameWon = diceStatuses.every((diceStatus, index, statuses) => diceStatus.isHeld 
  && diceStatus.value === statuses[0].value);

  function fillArrayWithDiceNumbers(length: number): number[] {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.ceil(Math.random() * 6));
    }
    return array;
  }

  function prepareDiceCollection(numbers: number[]): DiceStatus[] {
    return numbers?.map((num, index) => ({
      value: num,
      isHeld: false,
      id: `${index}-${num}`,
    })) || [];
  }

  function rollDice() {
    setDiceStatuses(prepareDiceCollection(fillArrayWithDiceNumbers(10)));
  }

  function rerollDice() {
    setDiceStatuses(prev => prev.map(dieSet => {
      return dieSet.isHeld ? dieSet : {
        ...dieSet,
        value: Math.ceil(Math.random() * 6),
      }
    }));
  }

  function hold(id: string) {
    console.log(id);

    setDiceStatuses(prev => prev.map(die => {
      return die.id !== id ? die : {
        ...die,
        isHeld: !die.isHeld,
      }
    }));
  }

  return (
    <main className='flex-grow-1 flex-column'>
      <div>
        <h1 className='centered'>Tenzies game</h1>
        <p className='instructions centered'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className='grid-container die-container'>
        {diceElements}
      </div>
      <div className='button-container'>
        {isGameWon ? <button className='mat-button btn-primary'
          onClick={rollDice}>New Game</button>
          : <button className='mat-button btn-primary'
          onClick={rerollDice}>Roll</button>}
      </div>
      {isGameWon && <Confetti
        width={width}
        height={height}
      />}
    </main>
  );
}

export default MainContent;