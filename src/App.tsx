import React from 'react';
import { useBootstrap } from '@src/useBootstrap';
import './ui-views/main.css';
import { MainContainer } from '@src/ui-views/MainContainer/MainContainer';

export const App = () => {
  useBootstrap();

  return (
    <MainContainer />
  );
};
