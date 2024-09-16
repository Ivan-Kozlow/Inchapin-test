'use client'

import styles from './OrderCallButton.module.scss'

import { FormOrderModal } from '@/Widgets/FormOrderModal'

export function OrderCallButton() {
	return (
		<FormOrderModal
			trigger={
				<button className={styles.header__call_button}>
					<div className={styles.header__call_button_text}>
						<span className={styles.header__call_button_text_1}>Заказать звонок</span>
						<span className={styles.header__call_button_text_2}>Заказать звонок</span>
					</div>
				</button>
			}
		/>
	)
}
