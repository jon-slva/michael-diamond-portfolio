import GalleryGrid from '../GalleryGrid/GalleryGrid'
import './GalleryCategoryFilter.scss'
import { GalleryProps } from './types'
import { ReactElement } from 'react'


export function GalleryCategoryFilter({ galleryImages }: GalleryProps): ReactElement {


	return (
		<section>
			<aside>
				{/* Logic for getting categories from data array & rendering them goes here */}
			</aside>

			<GalleryGrid galleryImages={galleryImages} />

		</section>
	)
}