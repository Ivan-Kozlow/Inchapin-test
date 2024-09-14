import styles from './PhoneCircle.module.scss'
import Image from 'next/image'

export function PhoneCircle() {
	return (
		<a href='tel:+74955272121' className={styles.phone}>
			<Image src={'/phone.svg'} alt='phone' width={14} height={14} />
		</a>
	)
}
