import styles from './AboutProject.module.scss'
import Image from 'next/image'

import Modal from '@/Shared/ui/Modal'
import { VideoButtonWithModal } from '../VideoButtonWithModal/VideoButtonWithModal'

export function AboutProject() {
	return (
		<section className={styles.section}>
			<article className={styles.left}>
				<h2 className={styles.title}>О проекте</h2>
				<Image
					className={styles.image}
					src={'/aboutProject/house.jpg'}
					alt='Дом'
					width={733}
					height={900}
				/>
			</article>
			<article className={styles.right}>
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
				<div className={styles.presentation}>
					<div className={styles.presentation__wrapper_text}>
						<p>ВИДЕО О ПРОЕКТЕ</p>
						<p className={styles.presentation__time}>1:25 минут</p>
					</div>

					<div className={styles.presentation__separator} />

					<VideoButtonWithModal />
				</div>
			</article>
		</section>
	)
}
