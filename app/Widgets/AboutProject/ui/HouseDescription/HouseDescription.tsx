import styles from './HouseDescription.module.scss'

export function HouseDescription() {
	return (
		<>
			<p className={styles.text_about}>
				уютное и&nbsp;безопасное пространство для&nbsp;счастливой,{' '}
				<span className={styles.blue}>спокойной и&nbsp;размеренной жизни</span>
			</p>
			<p className={styles.text_description}>
				<span className={styles.blue}>
					Квартиры от&nbsp;65 до&nbsp;356&nbsp;м2 с&nbsp;чистовой отделкой,
				</span>{' '}
				балконами, лоджиями и&nbsp;террасами В&nbsp;собственной ЗАКРЫТОЙ охраняемой территориИ.
			</p>
		</>
	)
}
