import { colors, colorsNamesType, themesNames } from './constants';

export const getColorVarsByTheme = (theme: string) => Object.keys(colors[theme]).reduce((acc, item: keyof colorsNamesType) => {
  // eslint-disable-next-line no-param-reassign
  acc += `--${item}: ${colors[theme][item]};`;
  return acc;
}, '');

export const getCurrentTheme = () => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return themesNames.dark;
  }
  return themesNames.light;
};

export const setColorVars = (theme: string) => {
  localStorage.setItem('theme', theme);
  const themeVars = getColorVarsByTheme(theme);
  const oldStyle = document.querySelector('style[data-theme-vars]');
  if (oldStyle) {
    oldStyle.remove();
  }
  const style = document.createElement('style');
  style.setAttribute('data-theme-vars', '');
  style.textContent = `:root {${themeVars}}`;
  document.head.appendChild(style);
};

export const toggleTheme = () => {
  const currentTheme = getCurrentTheme();
  if (currentTheme === themesNames.light) {
    setColorVars(themesNames.dark);
  } else {
    setColorVars(themesNames.light);
  }
};
