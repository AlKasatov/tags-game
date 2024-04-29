import React from 'react';
import { MovesCounter } from '@src/ui-views/MovesCounter/MovesCounter';
import { Button } from '@src/ui-views/Button/Button';
import { toggleTheme } from '@src/ui-logic/colorThemeHelpers';
import s from './InfoHeader.module.css';

type InfoHeaderPropsType = {
    count: number;
    resetGame: ()=>void;
}

export const InfoHeader = ({ count, resetGame }:InfoHeaderPropsType) => (
  <div className={s.infoWrapper}>
    <div className={s.info}>
      <MovesCounter count={count} />
      <Button text="New game" onClick={resetGame} />
      <Button text="Change theme" onClick={toggleTheme} />
    </div>
  </div>
);
