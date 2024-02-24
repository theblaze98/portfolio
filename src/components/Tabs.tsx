import { useContext } from 'react'
import { TabsContext } from '../contexts/Tabs'

type props = {
	elements: string[]
}

export default function Tabs({ elements }: props) {
	const { setTab, currentTab } = useContext(TabsContext)

	return (
		<div className='flex justify-center items-center'>
			{elements.map(element => (
				<span
					className={`px-3 py-1 cursor-pointer block font-medium rounded-md ${
						currentTab.includes(element.toLowerCase())
							? 'bg-light-bg-300/35 text-light-accent-200 dark:bg-dark-bg-300/25 dark:text-dark-accent-100'
							: ''
					}`}
					key={element}
					onClick={() => setTab(element.toLowerCase())}>
					{element}
				</span>
			))}
		</div>
	)
}
