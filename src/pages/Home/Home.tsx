import { useState, useEffect } from 'react'
import { Slider } from '../../components/Slider/Slider'
import './Home.scss'
import { SliderProps, GalleryProps } from './types';
import { GalleryCategoryFilter } from '../../components/GalleryCategoryFilter/GalleryCategoryFilter';

// import image JSON
const placeholderImages = [
	{
		url: 'https://placehold.co/3800x2000/bbb/fff?text=Placeholder%201',
		alt: 'placeholder image',
	},
	{
		url: 'https://placehold.co/3800x2000/bbb/fff?text=Placeholder%202',
		alt: 'placeholder image',
	},
	{
		url: 'https://placehold.co/3800x2000/bbb/fff?text=Placeholder%203',
		alt: 'placeholder image',
	},
]

export function Home(): React.ReactElement {
	const [sliderImages, setSliderImages] = useState<SliderProps>(placeholderImages)
	const [galleryImages, setGalleryImages] = useState<GalleryProps>(placeholderImages)

	useEffect(() => {
		// fetch images
		setGalleryImages(placeholderImages)
		setSliderImages(placeholderImages)
	}, [])

	return (
		<main>

			<Slider sliderImages={sliderImages} />

			<GalleryCategoryFilter galleryImages={galleryImages} />
		</main>
	)
}