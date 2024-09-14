'use client'
import './SelectFlat.scss'
import ReactSelect from 'react-select'

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
]

export function SelectFlat() {
	return (
		<ReactSelect
			options={options}
			classNamePrefix={'select_flat'}
			isSearchable={false}
			placeholder={
				<div className='select_flat_text'>
					<span className='select_flat_text_1'>Выбрать квартиру</span>
					<span className='select_flat_text_2'>Выбрать квартиру</span>
				</div>
			}
			unstyled
		/>
	)
}
