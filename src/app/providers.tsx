'use client'
import { TabProvider } from '@/contexts/Tabs'
import { ThemeProvider } from '@/contexts/Theme'

export function Providers({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<TabProvider>
			<ThemeProvider>{children}</ThemeProvider>
		</TabProvider>
	)
}
