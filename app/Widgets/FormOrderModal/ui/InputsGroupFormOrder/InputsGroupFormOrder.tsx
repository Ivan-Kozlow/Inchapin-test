'use client'

import { ControllerFieldState, ControllerRenderProps, UseFormStateReturn } from 'react-hook-form'

import { IInputs } from '../../constants/Inputs'

import { Input, InputPhone } from '@/Shared/ui/Input'
import { IFormOrderInputs } from '../../types/form'

type TypeProps = {
	field: ControllerRenderProps<IFormOrderInputs, keyof IFormOrderInputs>
	fieldState?: ControllerFieldState
	formState?: UseFormStateReturn<IFormOrderInputs>
	generalInputAttr?: IInputs
}

export function InputsGroupFormOrder(props: TypeProps) {
	if (props.field.name === 'phone')
		return <InputPhone {...props.generalInputAttr} {...props.field} label={props.generalInputAttr?.label} />

	return <Input {...props.generalInputAttr} {...props.field} label={props.generalInputAttr?.label} />
}
