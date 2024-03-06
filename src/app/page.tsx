'use client'
import { useContext, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import DarkModeSlider from '@/components/DarkModeSlider'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Tabs from '@/components/Tabs'
import Loader from '@/components/Loader'
import { TabsContext } from '@/contexts/Tabs'
import { ThemeContext } from '@/contexts/Theme'
const Projects = dynamic(() => import('@/components/Projects'), {
	loading: () => <Loader />,
})

export default function Page() {
	const { theme } = useContext(ThemeContext)
	const { currentTab } = useContext(TabsContext)

	const elements: string[] = ['Inicio', 'Proyectos']

	const TabsElements: { [key: string]: JSX.Element } = {
		inicio: <Home />,
		proyectos: <Projects />,
	}
	useEffect(() => {
		document.body.classList.toggle('dark', theme === 'dark')
	}, [theme])

	return (
		<>
			<div className='fixed flex items-center justify-center right-0 top-10 h-10 w-9 rounded-l-md dark:bg-dark-bg-200 shadow-md dark:shadow-slate-500/25'>
				<DarkModeSlider />
			</div>
			<main className='max-w-4xl w-11/12 flex min-h-screen mx-auto max-md:flex-col py-5 gap-10'>
				<Profile />
				<section className='w-2/3 max-md:w-full'>
					<Tabs elements={elements} />
					<br className='my-4' />
					<div>{TabsElements[currentTab]}</div>
				</section>
			</main>
		</>
	)
}
