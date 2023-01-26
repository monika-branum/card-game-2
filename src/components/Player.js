import React from 'react';
import { useAppContext } from '../GameContext/Context.js';
import CardList from './CardList';

export default function Player({ player, hand }) {
  const { setTo, to } = useAppContext();
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList player={player} cards={hand} />
    </div>
  );
}
