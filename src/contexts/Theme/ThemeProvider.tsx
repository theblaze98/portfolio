import { useState } from 'react'
import { ThemeContext } from './ThemeContext'

type props = {
	children: JSX.Element | JSX.Element[]
}

export function ThemeProvider({ children }: props) {
	const [theme, setTheme] = useState<string>(
		localStorage.getItem('theme') || 'dark'
	)
	const [isDark, setIsDark] = useState<boolean>(
		theme.includes('dark') ? true : false
	)

	const changeTheme = (theme: string) => {
		setTheme(theme)
		setIsDark(theme === 'dark')
		localStorage.setItem('theme', theme)
	}

	return (
		<ThemeContext.Provider value={{ theme, isDark, setTheme: changeTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
