import { fieldMatrix } from '@src/game-logic/FieldMatrix';
import React, { useEffect, useRef, useState } from 'react';
import { setStyleToCellWhileMove } from '@src/ui-logic/setStyleToCellWhileMove';

export const useMainContainer = () => {
  const { matrix, moveCounter } = fieldMatrix;
  const [gameField, setGameField] = useState(matrix);
  const [win, setWin] = useState(false);
  const isTransitionRef = useRef(false);
  const transitionEndHandler = () => {
    isTransitionRef.current = false;
    setGameField([...matrix]);
    if (fieldMatrix.checkWin()) {
      setWin(true);
    }
  };
  const resetGame = () => {
    fieldMatrix.mixCells();
    setWin(false);
    setGameField([...matrix]);
  };
  const mouseDownHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isTransitionRef.current) return;
    const elem = event.target;
    const value = +(elem as HTMLInputElement).dataset.value;
    if (value) {
      const move = fieldMatrix.checkMove(value);
      if (move) {
        fieldMatrix.makeMove(move);
        setStyleToCellWhileMove(elem as HTMLElement, move);
        isTransitionRef.current = true;
      }
    }
  };

  useEffect(() => {
    resetGame();
  }, []);

  return {
    win, gameField, moveCounter, mouseDownHandler, resetGame, transitionEndHandler,
  };
};
