import React from 'react';
import s from './MovesCounter.module.css';

export const MovesCounter = ({ count }: {count:number}) => (
  <div className={s.movesCounter}>
    Moves:&nbsp;
    {count}
  </div>
);
