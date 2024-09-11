'use client'
import { PropsWithChildren, useEffect } from 'react'

import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import * as I from 'smooth-scrollbar/interfaces'

type TypeProps = PropsWithChildren<{ options?: Partial<I.ScrollbarOptions> }>

export function WithScrollOptions({ children, options }: TypeProps) {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			Scrollbar.use(OverscrollPlugin)
			Scrollbar.init(document.querySelector('[data-scrollbar]')!, {
				damping: 0.04,
				plugins: {
					overscroll: {
						damping: 0.1,
						maxOverScroll: 115,
					},
				},
				...options,
			})
		}
	})
	return <>{children}</>
}
