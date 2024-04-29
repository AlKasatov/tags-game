import { MovesType } from '@src/game-logic/FieldMatrix';

export const setStyleToCellWhileMove = (elem: HTMLElement, move: MovesType) => {
  const x = +elem.getAttribute('data-x');
  const y = +elem.getAttribute('data-y');
  if (move === 'right') {
    elem.style.transform = `translate(${(x + 1) * 100}%, ${y * 100}%)`;
  } else if (move === 'left') {
    elem.style.transform = `translate(${(x - 1) * 100}%, ${y * 100}%)`;
  } else if (move === 'up') {
    elem.style.transform = `translate(${x * 100}%, ${(y - 1) * 100}%)`;
  } else if (move === 'down') {
    elem.style.transform = `translate(${x * 100}%, ${(y + 1) * 100}%)`;
  }
};
