import styles from './HeroWidget.module.scss'
import Image from 'next/image'

export function HeroWidget() {
	return (
		<section className={styles.section}>
			<Image
				className={styles.image}
				src='/hero/house.jpg'
				alt='Дом с тёплым светом внутри зимой'
				width={1760}
				height={600}
				priority
				sizes='"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"'
			/>
			<div className={styles.text}>
				<span>
					Дом бизнес-класса <br /> для ценителей роскоши
				</span>
				<Image
					className={styles.label_icon}
					src={'/hero/label.svg'}
					alt='Inchapin'
					width={862}
					height={137}
				/>
			</div>
		</section>
	)
}
