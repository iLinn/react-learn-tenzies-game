import './Die.css';

interface DieInterface {
  name: string;
  isHeld: boolean;
  holdDice: (id: string) => void;
  id: string;
}

export default function Die({ name, isHeld, holdDice, id }: DieInterface) {
  const isButtonHeldClass = isHeld ? 'btn-held' : '';
  return (
    <button
      className={`mat-button dice ${isButtonHeldClass}`}
      aria-pressed={isHeld}
      aria-label={`The die with value of ${name}, ${isHeld ? 'held' : 'not held'}`}
      onClick={() => holdDice(id)}
    >{name}</button>
  );
}