import { TypeInputProps } from '@/shared/ui/Input/Input/Input'
import { IFormOrderInputs } from '../types/form'

export interface IInputs extends TypeInputProps {
	name: keyof IFormOrderInputs
	label: string
}

export const INPUTS: IInputs[] = [
	{ name: 'name', label: 'Имя' },
	{ name: 'phone', label: 'Телефон' },
	{ name: 'email', label: 'E-mail' },
] as const

export const defaultInputs = INPUTS.reduce((acc, input) => ({ ...acc, [input.name]: '' }), {})
