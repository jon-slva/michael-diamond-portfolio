import './GalleryGrid.scss'
import { ReactElement } from 'react'
import { GalleryProps } from './types'


function GalleryGrid({ galleryImages }: GalleryProps): ReactElement {

	return (
		<section className='gallery-grid'>
			{galleryImages.map((image, index) => {
				return (
					<img
						key={index}
						className="gallery-grid__item"
						src={image.url}
						alt={image.alt}
					/>
				)
			})}

		</section>
	)
}

export default GalleryGrid
