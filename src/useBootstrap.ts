import { useEffect } from 'react';
import { getCurrentTheme, setColorVars } from '@src/ui-logic/colorThemeHelpers';

export const useBootstrap = () => {
  useEffect(() => {
    const currentTheme = getCurrentTheme();

    setColorVars(currentTheme);

    const preloader = document.querySelector('#preloader');
    if (preloader) {
      preloader.remove();
    }
  }, []);
};
