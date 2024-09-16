import { PopupProps } from 'reactjs-popup/dist/types'

import Modal from '@/Shared/ui/Modal'

type TypeProps = {
	trigger: PopupProps['trigger']
}

export function FormOrderModal({ trigger }: TypeProps) {
	return <Modal trigger={trigger}>Hello world</Modal>
}
