import './Slider.scss'
import { useState } from 'react';
import { SliderProps } from './types';

export function Slider({ sliderImages }: SliderProps): React.ReactElement {
	const [currentSlide, setCurrentSlide] = useState(0)
	// const [sliderInterval, setSliderInterval] = useState(null)



	return (
		<section className='slider-section'>
			<aside className='slider-container'>

				{/* Slider Images */}
				{sliderImages.map((image, index) => {
					return (
						<img
							className={`slide ${index === currentSlide ? 'visible' : 'hidden'}`}
							key={index}
							src={image.url}
							alt={image.alt}
						/>
					)
				})}

				{/* Slider Indicators */}
				<div className='slider__steps'>
					{sliderImages.map((_, index) => {
						return (
							<div
								key={index}
								className={`slider__steps--dots ${index === currentSlide ? 'current' : ''}`}>
							</div>
						)
					})}
				</div>
			</aside>
		</section>
	)
}