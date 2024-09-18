import styles from '../Input/Input.module.scss'
import InputMask from 'react-input-mask'
import { InputHTMLAttributes, forwardRef } from 'react'

type TypeProps = {
	label?: string
} & InputHTMLAttributes<HTMLInputElement>

export const InputPhone = forwardRef<HTMLInputElement, TypeProps>((props, ref) => {
	return (
		<InputMask mask='+7 (999) 999-99-99' {...props}>
			{/* @ts-ignore */}
			{(inputProps) => (
				<label className={styles.label}>
					<input
						ref={ref}
						{...inputProps}
						type={props.type || 'text'}
						className={styles.input}
						placeholder={'not visible :)'}
					/>
					<span className={styles.placeholder}>{props.label || props.name}</span>
				</label>
			)}
		</InputMask>
	)
})
