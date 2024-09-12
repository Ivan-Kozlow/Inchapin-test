import styles from './Header.module.scss'

import { Burger } from '../Burger/Burger'

export function Header() {
	return (
		<header className={styles.header}>
			<Burger />
		</header>
	)
}
