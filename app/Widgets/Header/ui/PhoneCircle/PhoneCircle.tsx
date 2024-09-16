import styles from './PhoneCircle.module.scss'
import Image from 'next/image'

type TypeProps = Omit<React.HTMLAttributes<HTMLButtonElement>, 'className'>

export function PhoneCircle(props: TypeProps) {
	return (
		<button {...props} className={styles.phone}>
			<Image src={'/phone.svg'} alt='phone' width={14} height={14} />
		</button>
	)
}
