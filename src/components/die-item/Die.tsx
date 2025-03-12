import './Die.css';

interface DieInterface {
  name: string;
  isHeld: boolean;
  holdDice: (id: string) => void;
  id: string;
}

export default function Die({ name, isHeld, holdDice, id }: DieInterface) {
  const buttonName = name || '#';
  const isButtonHeldClass = isHeld ? 'btn-held' : '';
  return (
    <button className={`mat-button dies ${isButtonHeldClass}`}
      onClick={() => holdDice(id)}>{buttonName}</button>
  );
}