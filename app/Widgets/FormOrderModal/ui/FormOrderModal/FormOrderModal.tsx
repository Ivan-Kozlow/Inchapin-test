import Modal from '@/Shared/ui/Modal'

type TypeProps = {
	handleModalClose: () => void
	isOpen: boolean
}

export function FormOrderModal({ handleModalClose, isOpen }: TypeProps) {
	return (
		<Modal handleModalClose={handleModalClose} isOpen={isOpen}>
			Hello world
		</Modal>
	)
}
