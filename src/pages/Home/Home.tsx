// import { useState } from 'react'
import GalleryCategoryFilter from '../../components/GalleryCategoryFilter/GalleryCategoryFilter'
import Slider from '../../components/Slider/Slider'
import './Home.scss'
// import { SliderProps, GalleryProps } from './types';

// import slideData from '../../data/slider_images.json'
// import slideData from '../../data/slider_images.json'


export default function Home({ galleryData, foundCategories }): React.ReactElement {
	// const [sliderImages, setSliderImages] = useState<SliderProps>(slideData)
	// const [galleryImages, setGalleryImages] = useState<GalleryProps>(galleryData)


	return (
		<main>

			<Slider
			// sliderImages={slideData}
			/>

			<GalleryCategoryFilter galleryData={galleryData} foundCategories={foundCategories} />

		</main>
	)
}