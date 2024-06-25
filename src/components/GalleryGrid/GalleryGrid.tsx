import './GalleryGrid.scss'
import { ReactElement } from 'react'
import { GalleryProps } from './types'


export default function GalleryGrid({ galleryImages, selectedCategory }: GalleryProps): ReactElement {
	// the gallery images showing must have the category matching selectedCategory
	// selectedCategory must be unformatted in order to match the category in the galleryImages

	return (
		<section className='gallery-grid'>

			{galleryImages.map((image, index) => {
				return (
					<img
						key={index}
						className="gallery-grid__item"
						src={image.thumbSrc}
						alt={image.alt}
						style={{
							objectPosition: `${image.thumbPosX} ${image.thumbPosY}`
						}}
					/>
				)
			})}

		</section>
	)
}