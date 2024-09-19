'use client'

import styles from './VideoButtonWithModal.module.scss'
import Image from 'next/image'

import Modal from '@/Shared/ui/Modal'

export function VideoButtonWithModal() {
	return (
		<Modal
			trigger={
				<button className={styles.presentation__button}>
					<Image src={'/aboutProject/preview_video.jpg'} alt={'preview'} width={241} height={241} />
					<div className={styles.presentation__button_circle} />
					<p className={styles.presentation__button_text}>
						<Image src={'/aboutProject/play.svg'} alt={'play'} width={9} height={10} />
						&nbsp;play
					</p>
				</button>
			}
		>
			<video
				ref={(el) => el?.requestFullscreen()}
				src='/aboutProject/test-video.mp4'
				autoPlay
				autoFocus
				aria-valuenow={10}
				controls
				className={styles.video}
			/>
		</Modal>
	)
}
