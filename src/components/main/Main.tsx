import Die from '../die-item/Die';
import './Main.css';

function MainContent() {
  const diesNumbers = fillArrayWithRandomNumbers(10);
  const dies = diesNumbers.map((itemNumber, index) => (
    <Die key={`${index}-${itemNumber}`}
      name={`${itemNumber}`}
    />
  ));

  function fillArrayWithRandomNumbers(length: number): number[] {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 6) + 1);
    }
    return array;
}

  return (
    <main className='flex-grow-1'>
      <div className="centered">
        <h1>Tenzies game</h1>
      </div>
      <div className='grid-container die-container'>
        {dies}
      </div>
    </main>
  );
}

export default MainContent;