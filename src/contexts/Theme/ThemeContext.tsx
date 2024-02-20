import { createContext } from 'react'

export interface IThemeContext {
  theme: string
  isDark: boolean
  setTheme: (theme: string) => void
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)
