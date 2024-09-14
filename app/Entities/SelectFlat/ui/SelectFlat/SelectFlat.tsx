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
			placeholder={'Выбрать квартиру'}
			unstyled
		/>
	)
}
