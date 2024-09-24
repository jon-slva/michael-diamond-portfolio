import { ReactElement } from 'react';
import { GalleryGridProps } from './types';
import { ImageWithId } from '../GalleryCategoryFilter/types';
import { motion, AnimatePresence } from 'framer-motion';
import './GalleryGrid.scss';


export default function GalleryGrid({ galleryImages, selectedCategory }: GalleryGridProps): ReactElement {
	// the gallery images showing must have the category matching selectedCategory
	// selectedCategory must be unformatted in order to match the category in the galleryImages
	const filteredImages = selectedCategory === "all" ? galleryImages : galleryImages.filter(image => image.category === selectedCategory);

	return (
		<AnimatePresence>
			<motion.div className='gallery-grid' layout>
				{filteredImages.map((image: ImageWithId) => (
					<motion.div
						layout
						key={image.uuid}
						className="gallery-grid__item"
						style={{
							backgroundImage: `url(${image.thumbSrc})`,
							backgroundSize: 'cover',
							backgroundPosition: `${image.thumbPosX} ${image.thumbPosY}`
						}}
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<motion.div
							className="gallery-grid__item--overlay"
							initial={{ opacity: 0 }}
							whileHover={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							<h3>{image.title}</h3>
						</motion.div>
					</motion.div>
				))}
			</motion.div>
		</AnimatePresence >
	);
};