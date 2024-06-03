// import { useState } from 'react'
import { Slider } from '../../components/Slider/Slider'
import './Home.scss'
// import { SliderProps, GalleryProps } from './types';
import { GalleryCategoryFilter } from '../../components/GalleryCategoryFilter/GalleryCategoryFilter';

// import slideData from '../../data/slider_images.json'
// import slideData from '../../data/slider_images.json'


export function Home(): React.ReactElement {
	// const [sliderImages, setSliderImages] = useState<SliderProps>(slideData)
	// const [galleryImages, setGalleryImages] = useState<GalleryProps>(galleryData)


	return (
		<main>

			<Slider
			// sliderImages={slideData}
			/>

			<GalleryCategoryFilter
			// galleryImages={galleryImages}
			/>

		</main>
	)
}