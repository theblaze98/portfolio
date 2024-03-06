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
	description:
		'Soy desarrollador web desde hace un año y me apasiona crear soluciones eficientes y rápidas.',
	keywords: 'portfolio web developer programador desarrollador_web',
	icons: 'https://w.wallhaven.cc/full/l8/wallhaven-l8v3ey.png',
	openGraph: {
		title: 'Dionicio Portfolio',
		images: 'https://w.wallhaven.cc/full/l8/wallhaven-l8v3ey.png',
		url: 'https://dionicio.vercel.app',
	},
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
					<div className='min-h-screen bg-light-bg-100 text-dark-primary-100 dark:bg-dark-bg-100 dark:text-light-primary-100 '>
						{children}
					</div>
				</Providers>
			</body>
		</html>
	)
}
