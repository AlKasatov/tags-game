import { Button } from '@src/ui-views/Button/Button';
import React from 'react';
import s from './WinScreen.module.css';

export const WinScreen = ({ reset }: {reset: ()=>void}) => (
  <div className={s.winWrapper}>
    <h2 className={s.win}>Win!</h2>
    <Button text="New game" onClick={reset} />
  </div>
);
