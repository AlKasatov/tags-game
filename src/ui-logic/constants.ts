export type colorsNamesType = {
  background: string;
  text: string;
  primary: string;
  secondary: string;
}

export const colorsNames: colorsNamesType = {
  background: 'background',
  text: 'text',
  primary: 'primary',
  secondary: 'secondary',
};

export const themesNames = {
  dark: 'dark',
  light: 'light',
};

export const colors = {
  [themesNames.light]: {
    [colorsNames.background]: '#fdfdfd',
    [colorsNames.text]: '#313131',
    [colorsNames.primary]: 'green',
    [colorsNames.secondary]: 'lightgreen',
  },
  [themesNames.dark]: {
    [colorsNames.background]: '#313131',
    [colorsNames.text]: 'bisque',
    [colorsNames.primary]: 'green',
    [colorsNames.secondary]: 'lightgreen',
  },

};
