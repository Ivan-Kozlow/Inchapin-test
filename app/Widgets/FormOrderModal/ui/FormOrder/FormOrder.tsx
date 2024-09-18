'use client'

import styles from './FormOrder.module.scss'
import { Controller, useForm } from 'react-hook-form'
import Link from 'next/link'

import { INPUTS, defaultInputs } from '../../constants/Inputs'

import { Input } from '@/Shared/ui/Input'
import { TypeFormOrder } from '../../types/form'

export function FormOrder() {
	const { handleSubmit, control } = useForm<TypeFormOrder>({
		mode: 'onChange',
		defaultValues: defaultInputs,
	})

	const onSubmit = (data: TypeFormOrder) => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<fieldset className={styles.fieldset}>
				{INPUTS.map((input) => (
					<Controller
						control={control}
						key={input.name}
						name={input.name}
						render={({ field }) => <Input {...input} {...field} label={input.label} />}
					/>
				))}
			</fieldset>

			<p className={styles.text}>
				Нажимая на кнопку «Отправить», вы ознакомлены и&nbsp;соглашаетесь с{' '}
				<Link href={'#'} className={styles.link}>
					политикой обработки персональных данных
				</Link>
			</p>
			<button className={styles.button}>Отправить</button>
		</form>
	)
}
