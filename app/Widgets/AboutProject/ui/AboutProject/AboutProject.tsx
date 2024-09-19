import styles from './AboutProject.module.scss'
import Image from 'next/image'

import { VideoButtonWithModal } from '../VideoButtonWithModal/VideoButtonWithModal'
import { HouseDescription } from '../HouseDescription/HouseDescription'

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
				<div className={styles.arrow}>
					<Image src={'/aboutProject/arrow.svg'} alt='' width={20} height={27} />
				</div>
			</article>
			<article className={styles.right}>
				<HouseDescription />
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
