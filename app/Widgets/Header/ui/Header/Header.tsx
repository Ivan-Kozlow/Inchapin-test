import styles from './Header.module.scss'
import Image from 'next/image'
import '@/shared/styles/visually-hidden.scss'

import { PhoneCircle } from '../PhoneCircle/PhoneCircle'
import { OrderCallButton } from '../OrderCallButton/OrderCallButton'
import { Burger } from '../Burger/Burger'
import { FormOrderModal } from '@/Widgets/FormOrderModal'
import { SelectFlat } from '@/Entities/SelectFlat'

export function Header() {
	return (
		<header id='header' className={styles.header}>
			<div className={styles.header__left}>
				<Burger />
				<div className={styles.header__select_left}>
					<SelectFlat />
				</div>
			</div>

			<FormOrderModal
				trigger={
					<div className={styles.header__phone_circle}>
						<PhoneCircle />
					</div>
				}
			/>

			<button className={styles.header__center}>
				<h1 className='visually-hidden'>Inchapin</h1>
				<Image src={'/logo.svg'} alt='logo' width={187} height={30} />
			</button>

			<div className={styles.header__select_right}>
				<SelectFlat />
			</div>

			<div className={styles.header__right}>
				<a href='tel:+74955272121' className={styles.header__phone}>
					+7 495 527 21 21
				</a>
				<OrderCallButton />
			</div>
		</header>
	)
}
