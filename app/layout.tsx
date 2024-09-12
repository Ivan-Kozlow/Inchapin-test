import type { Metadata } from 'next'
import './shared/styles/nullstyle.scss'
import localFont from 'next/font/local'

const ProximaNova = localFont({
	src: [
		{ path: './shared/fonts/ProximaNova-Regular.woff', weight: '400' },
		{ path: './shared/fonts/ProximaNova-Regular.woff2', weight: '400' },
		{ path: './shared/fonts/ProximaNova-Semibold.woff', weight: '600' },
		{ path: './shared/fonts/ProximaNova-Semibold.woff2', weight: '600' },
	],
	display: 'swap',
	variable: '--font-Proxima-Nova',
	adjustFontFallback: 'Arial',
})

export const metadata: Metadata = {
	title: 'Inchapin',
	description: 'Inchapin test project',
	robots: { index: false },
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body data-scrollbar className={`${ProximaNova.className}`}>
				{children}
			</body>
		</html>
	)
}
