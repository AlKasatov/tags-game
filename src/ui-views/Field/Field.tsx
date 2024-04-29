import React from 'react';
import { Cell } from '@src/ui-views/Cell/Cell';
import s from './Field.module.css';

type FieldPropsType = {
  transitionEndHandler: ()=>void;
  mouseDownHandler: (event: React.MouseEvent<HTMLDivElement>)=>void;
  gameField: number[][]
}

export const Field = ({ transitionEndHandler, mouseDownHandler, gameField }: FieldPropsType) => (
  <div className={s.wrapper} onTransitionEnd={transitionEndHandler}>
    <div className={s.field} onMouseDown={mouseDownHandler}>
      {
        gameField.map((row:number[], y:number) => (
          row.map((cell, x) => (
            <Cell key={cell} value={cell} x={x} y={y} />
          ))
        ))
      }
    </div>
  </div>

);
