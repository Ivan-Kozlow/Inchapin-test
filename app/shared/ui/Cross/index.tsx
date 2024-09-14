import styles from './Cross.module.scss'

type TypeProps = JSX.IntrinsicElements['button']

export function Cross(props: TypeProps) {
	return <button className={styles.cross} type='button' aria-label='Close modal' {...props}></button>
}
