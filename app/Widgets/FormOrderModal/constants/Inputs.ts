import { TypeInputProps } from '@/Shared/ui/Input/Input/Input'
import { TypeFormOrder } from '../types/form'

interface IInputs extends TypeInputProps {
	name: keyof TypeFormOrder
	label: string
}

export const INPUTS: IInputs[] = [
	{ name: 'name', label: 'Имя' },
	{ name: 'phone', label: 'Телефон' },
	{ name: 'email', label: 'E-mail' },
] as const

export const defaultInputs = INPUTS.reduce((acc, input) => ({ ...acc, [input.name]: '' }), {})
