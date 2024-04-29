import React from 'react';
import s from './Cell.module.css';

type CellPropsType = {
    value: number;
    x: number;
    y: number;
}

export const Cell = ({ value, x, y }: CellPropsType) => (
  <div
    className={s.wrapper}
    data-x={x}
    data-y={y}
    data-value={value}
    style={{
      transform: `translate(${x * 100}%, ${y * 100}%)`,
    }}
  >
    <div
      className={value === 0 ? s.cell0 : s.cell}
    >
      {value === 0 ? '' : value}
    </div>
  </div>
);
