'use client'

import styles from './Input.module.scss'
import { InputHTMLAttributes, forwardRef } from 'react'

export type TypeInputProps = {
	label?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, TypeInputProps>((props, ref) => {
	return (
		<label className={styles.label}>
			<input
				ref={ref}
				{...props}
				type={props.type || 'text'}
				className={styles.input}
				placeholder={'not visible :)'}
			/>
			<span className={styles.placeholder}>{props.label || props.name}</span>
		</label>
	)
})
