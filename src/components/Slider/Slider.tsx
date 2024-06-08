import './Slider.scss'
import { useEffect, useState } from 'react';
// import { SliderProps } from './types';

import slideData from '../../data/slider_images.json'



export function Slider(
	// { sliderImages }: SliderProps
): React.ReactElement {
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(prevSlide => (prevSlide + 1) % slideData.length)
		}, 5000)

		return () => clearInterval(interval);
	}, [])

	return (
		<section className='slider-section'>
			<aside className='slider-container'>

				{/* Slider Images */}
				<ul>
					{slideData.map((image, index) => (
						<li key={index} className={index === currentSlide ? 'visible' : 'hidden'} >
							<img
								className="slide"
								src={image.src}
								alt={image.alt}
							/>
						</li>
					))}
				</ul>

				{/* Slider Indicators */}
				<ul className='slider__steps'>
					{slideData.map((_, index) => {
						return (
							<li
								key={index}
								className={`slider__steps--dots ${index === currentSlide ? 'current' : ''}`}>
							</li>
						)
					})}
				</ul>
			</aside>
		</section>
	)
}