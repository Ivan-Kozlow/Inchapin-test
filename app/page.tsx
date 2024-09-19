import styles from './page.module.scss'

import { WithScrollOptions } from './WithScroll'
import { HeroWidget } from './Widgets/HeroWidget'
import { Header } from './Widgets/Header'
import { AboutProject } from './Widgets/AboutProject'

export default function Home() {
	return (
		// FIXME не фиксируется шапка при скролле, при кастомном скролее нужно отключить scroll-gutter в nullstyle
		// <WithScrollOptions>
		<div className={styles.container}>
			<Header />
			<main className={styles.content}>
				<div className={styles.hero}>
					<HeroWidget />
				</div>
				<div>
					<AboutProject />
				</div>
			</main>
		</div>
		// </WithScrollOptions>
	)
}
