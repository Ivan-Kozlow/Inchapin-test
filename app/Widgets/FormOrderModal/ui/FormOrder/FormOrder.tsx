import styles from './FormOrder.module.scss'
import { Controller, useForm } from 'react-hook-form'
import Link from 'next/link'

import { INPUTS, defaultInputs } from '../../constants/Inputs'

import { InputsGroupFormOrder } from '../InputsGroupFormOrder/InputsGroupFormOrder'
import { IFormOrderInputs } from '../../types/form'

export function FormOrder() {
	const { handleSubmit, control } = useForm<IFormOrderInputs>({
		mode: 'onChange',
		defaultValues: defaultInputs,
	})

	const onSubmit = (data: IFormOrderInputs) => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<fieldset className={styles.fieldset}>
				{INPUTS.map((input) => (
					<Controller
						control={control}
						key={input.name}
						name={input.name}
						render={({ field }) => <InputsGroupFormOrder field={field} generalInputAttr={input} />}
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
