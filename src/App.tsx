import { useEffect, useContext } from 'react'
import { ThemeContext } from './contexts/Theme'
import DarkModeSlider from './components/DarkModeSlider'
import Profile from './components/Profile'
import Tabs from './components/Tabs'

export default function App() {
	const { theme } = useContext(ThemeContext)

  const elements: string[] = [
    'Inicio',
    'Proyectos'
  ]

	useEffect(() => {
		document.body.classList.toggle('dark', theme === 'dark')
	}, [theme])

	return (
		<>
			<div className='fixed flex items-center justify-center right-0 top-10 h-10 w-9 rounded-l-md dark:bg-dark-bg-200 shadow-md dark:shadow-slate-500/25'>
				<DarkModeSlider />
			</div>
			<main className='max-w-2xl w-11/12 flex min-h-screen mx-auto max-md:flex-col py-5 gap-4'>
        <Profile />
				<Tabs elements={elements} />
			</main>
		</>
	)
}
