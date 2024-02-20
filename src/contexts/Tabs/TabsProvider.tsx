import { useState } from 'react'
import { TabsContext } from './TabsContext'

type props = {
	children: JSX.Element | JSX.Element[]
}

export function TabProvider({ children }: props) {
	const [currentTab, setCurrentTab] = useState<string>('inicio')

	const setTab = (tab: string) => {
		setCurrentTab(tab)
	}

	return (
		<TabsContext.Provider value={{ currentTab, setTab }}>
			{children}
		</TabsContext.Provider>
	)
}
