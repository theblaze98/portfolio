'use client'
import { useState } from 'react'
import { ThemeContext } from './ThemeContext'

type props = {
	children: React.ReactNode
}

export function ThemeProvider({ children }: props) {
	const [theme, setTheme] = useState<string>(
		typeof window !== 'undefined'
			? window.localStorage.getItem('theme') || 'dark'
			: 'dark'
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
