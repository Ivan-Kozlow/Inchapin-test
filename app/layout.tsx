import type { Metadata } from 'next'
import './nullstyle.scss'
import localFont from 'next/font/local'

const ProximaNova = localFont({
	src: [
		{ path: './fonts/ProximaNova-Light.woff', weight: '300' },
		{ path: './fonts/ProximaNova-Light.woff2', weight: '300' },
		{ path: './fonts/ProximaNova-Regular.woff', weight: '400' },
		{ path: './fonts/ProximaNova-Regular.woff2', weight: '400' },
		{ path: './fonts/ProximaNova-Semibold.woff', weight: '600' },
		{ path: './fonts/ProximaNova-Semibold.woff2', weight: '600' },
		{ path: './fonts/ProximaNova-Bold.woff', weight: '700' },
		{ path: './fonts/ProximaNova-Bold.woff2', weight: '700' },
	],
	display: 'swap',
	variable: '--font-proxima-nova',
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
			<body className={`${ProximaNova.className}`}>{children}</body>
		</html>
	)
}
