'use client'
import styles from './Burger.module.scss'
import { useRef } from 'react'

export function Burger() {
	const burgerContentRef = useRef<HTMLUListElement>(null)

	const handleClick = () => {
		if (!burgerContentRef.current) return
		burgerContentRef.current.classList.toggle(styles.burger__content_active)
	}

	return (
		<div className={styles.burger}>
			<button className={styles.burger__button} onClick={handleClick}>
				<span className={styles.burger__icon} />
				<span className={styles.burger__text}>Меню</span>
			</button>

			<ul className={styles.burger__content} ref={burgerContentRef}>
				<li>hello, I`m content 1</li>
				<li>hello, I`m content 2</li>
			</ul>
		</div>
	)
}
