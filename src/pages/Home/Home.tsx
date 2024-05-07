import { useState, useEffect } from 'react'
import { Slider } from '../../components/Slider/Slider'
import './Home.scss'
import { SliderProps } from './types';

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
	// const [galleryImages, setGalleryImages] = useState<GalleryProps | null>(null)

	useEffect(() => {
		// fetch images

		setSliderImages(placeholderImages)
		console.log(sliderImages)
	}, [])

	return (
		<main>

			<Slider sliderImages={sliderImages} />
			{/* <section style={{
				width: '100%',
				backgroundColor: 'lightblue',
				height: '90vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',

			}}>
				<h1>Hero goes here</h1>
			</section> */}

			<section style={{
				width: '100%',
			}}>
				<aside style={{
					textAlign: 'center',
					backgroundColor: 'lightgreen',
				}}>
					<h2>
						Gallery filter goes here
					</h2>
				</aside>

				<aside style={{
					textAlign: 'center',
					backgroundColor: 'orange',
				}}>
					<h2>
						Gallery grid goes here
					</h2>
				</aside>
			</section>




		</main>
	)
}