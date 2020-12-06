import { createContext, useContext } from 'react';

export const ThemeContext = createContext(null);

export function useTheme() {
  return useContext(ThemeContext);
}
