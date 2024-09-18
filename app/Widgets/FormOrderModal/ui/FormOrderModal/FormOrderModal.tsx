'use client'

import styles from './FormOrderModal.module.scss'
import { PopupProps } from 'reactjs-popup/dist/types'

import Modal from '@/Shared/ui/Modal'
import { FormOrder } from '../FormOrder/FormOrder'

type TypeProps = {
	trigger: PopupProps['trigger']
}

export function FormOrderModal({ trigger }: TypeProps) {
	return (
		<Modal trigger={trigger}>
			<div className={styles.content}>
				<h1 className={styles.title}>Заказать звонок</h1>
				<FormOrder />
			</div>
		</Modal>
	)
}
