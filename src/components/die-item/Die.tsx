import './Die.css';

export default function Die({ name }: { name: string }) {
  const buttonName = name || '#';
  return (
    <button className='mat-button'>{buttonName}</button>
  );
}