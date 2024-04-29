import React from 'react';
import { InfoHeader } from '@src/ui-views/InfoHeader/InfoHeader';
import { WinScreen } from '@src/ui-views/WinScreen/WinScreen';
import { Field } from '@src/ui-views/Field/Field';
import { useMainContainer } from '@src/ui-logic/useMainContainer';

export const MainContainer = () => {
  const {
    win, gameField, moveCounter, mouseDownHandler, resetGame, transitionEndHandler,
  } = useMainContainer();
  return (
    <>
      <InfoHeader count={moveCounter} resetGame={resetGame} />
      <Field gameField={gameField} mouseDownHandler={mouseDownHandler} transitionEndHandler={transitionEndHandler} />
      {win && <WinScreen reset={resetGame} />}
    </>
  );
};
