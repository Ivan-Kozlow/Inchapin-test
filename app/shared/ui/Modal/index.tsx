'use client'

import styles from './Modal.module.scss'
import { PopupProps } from 'reactjs-popup/dist/types'
import ReactModal from 'reactjs-popup'
import { Transition, TransitionStatus } from 'react-transition-group'
import { useRef } from 'react'

import { Cross } from '../Cross'

const duration = 300

const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0,
}

const transitionStyles: Record<TransitionStatus, { opacity: number }> = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 },
	unmounted: { opacity: 0 },
}

type Props = {
	children: React.ReactNode | React.ReactNode[]
} & Omit<PopupProps, 'onClose' | 'className' | 'contentStyle' | 'overlayStyle'>

const Modal = (props: Props) => {
	const { children, trigger, ...rest } = props
	const nodeRef = useRef<HTMLDivElement>(null)

	return (
		<Transition nodeRef={nodeRef} timeout={300} unmountOnExit in={true}>
			{(state) => (
				<div
					ref={nodeRef}
					style={{
						...defaultStyle,
						...transitionStyles[state],
					}}
				>
					<ReactModal
						closeOnEscape
						closeOnDocumentClick={false}
						lockScroll
						modal
						nested
						trigger={trigger}
						{...rest}
						className={`${styles.modal}`}
						overlayStyle={{ width: '100%', height: '100%', backgroundColor: 'white' }}
						contentStyle={{ position: 'static' }}
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
				</div>
			)}
		</Transition>
	)
}

export default Modal
