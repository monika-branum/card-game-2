import React from 'react';
import { useAppContext } from '../GameContext/Context.js';
import Card from './Card';

export default function ExecutePassButton({ passCard }) {
  const { from, to, selectedCard, setSelectedCard } = useAppContext();
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} /> from {from} to {to}
    </div>
  );
}
