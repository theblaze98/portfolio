import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Dionicio Vargas',
	description: 'Portfolio',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Providers>
					<div className='min-h-screen transition-colors duration-500 bg-light-bg-100 text-dark-primary-100 dark:bg-dark-bg-100 dark:text-light-primary-100 '>
						{children}
					</div>
				</Providers>
			</body>
		</html>
	)
}
