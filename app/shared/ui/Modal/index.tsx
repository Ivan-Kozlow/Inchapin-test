'use client'

import './Modal.scss'
import styles from './Modal.module.scss'
import { PopupProps } from 'reactjs-popup/dist/types'
import ReactModal from 'reactjs-popup'
import { Transition } from 'react-transition-group'
import { CSSProperties, useRef } from 'react'

import { Cross } from '../Cross'

const overlayStyle: CSSProperties = {
	width: '100%',
	height: '100%',
	backgroundColor: 'white',
	overflowY: 'auto',
	scrollbarWidth: 'none',
}

type Props = {
	children: React.ReactNode | React.ReactNode[]
	trigger: PopupProps['trigger']
} & Omit<PopupProps, 'onClose' | 'className' | 'contentStyle' | 'overlayStyle'>

const Modal = (props: Props) => {
	const { children, ...rest } = props
	const nodeRef = useRef(null)

	return (
		<Transition nodeRef={nodeRef} timeout={300} unmountOnExit in={true}>
			{(state) => (
				<ReactModal
					ref={nodeRef}
					closeOnEscape
					closeOnDocumentClick={false}
					lockScroll
					modal
					nested
					{...rest}
					overlayStyle={overlayStyle}
					contentStyle={{ position: 'static' }}
					className={`${styles.modal} modal_${state}`}
				>
					{/* @ts-ignore */}
					{(close: () => void) => (
						<>
							<div className={styles.modal__cross}>
								<Cross onClick={() => close()} />
							</div>
							<div className={styles.modal__content}>{children}</div>
						</>
					)}
				</ReactModal>
			)}
		</Transition>
	)
}

export default Modal
