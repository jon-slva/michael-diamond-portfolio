import './GalleryGrid.scss'
import { ReactElement } from 'react'
import { GalleryProps } from './types'


function GalleryGrid({ galleryImages }: GalleryProps): ReactElement {

	return (
		<section>
			{galleryImages.map((image, index) => {
				return (
					<div key={index} className="gallery-grid__item">
						<img src={image.url} alt={image.alt} />
					</div>
				)
			})}

		</section>
	)
}

export default GalleryGrid
