'use client'

import styles from './OrderCallButton.module.scss'
import { useState } from 'react'

import { FormOrderModal } from '@/Widgets/FormOrderModal'

export function OrderCallButton() {
	const [isModalActive, setModalActive] = useState(false)

	const handleModalOpen = () => {
		setModalActive(true)
	}
	const handleModalClose = () => {
		setModalActive(false)
	}

	return (
		<>
			<button className={styles.header__call_button} onClick={handleModalOpen}>
				<div className={styles.header__call_button_text}>
					<span className={styles.header__call_button_text_1}>Заказать звонок</span>
					<span className={styles.header__call_button_text_2}>Заказать звонок</span>
				</div>
			</button>
			<FormOrderModal handleModalClose={handleModalClose} isOpen={isModalActive} />
		</>
	)
}
