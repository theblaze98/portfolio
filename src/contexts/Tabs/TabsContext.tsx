import { createContext } from 'react'

export interface ITabContext {
  currentTab: string
  setTab: (tab: string) => void
}

export const TabsContext = createContext<ITabContext>({} as ITabContext)
