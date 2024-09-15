import styles from './Modal.module.scss'
import ReactModal from 'reactjs-popup'
import { Transition } from 'react-transition-group'

import { Cross } from '../Cross'

type Props = {
	handleModalClose?: () => void
	isOpen: boolean
	children: React.ReactNode | React.ReactNode[]
}

const Modal = (props: Props) => {
	const { handleModalClose, children, isOpen } = props

	return (
		<Transition timeout={300} in={isOpen} unmountOnExit>
			{(state) => (
				<ReactModal
					className={`${styles.modal}`}
					open={isOpen}
					closeOnEscape
					onClose={handleModalClose}
					nested
					lockScroll
					modal
					closeOnDocumentClick={false}
					overlayStyle={{ width: '100%', height: '100%', backgroundColor: 'white' }}
					contentStyle={{ position: 'static' }}
				>
					<div className={styles.modal__cross}>
						<Cross onClick={handleModalClose} />
					</div>
					<div className={styles.modal__content}>{children}</div>
				</ReactModal>
			)}
		</Transition>
	)
}

export default Modal
