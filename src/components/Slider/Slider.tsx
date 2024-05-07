import './Slider.scss'
import { useState } from 'react';
import { SliderProps } from './types';

export function Slider({ sliderImages }: SliderProps): React.ReactElement {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [sliderInterval, setSliderInterval] = useState(null)



	return (
		<section className='slider-section'>
			<aside className='slider-container'>

				{/* Slider Images */}
				{sliderImages.map((image, index) => {
					return (
						<img
							className={`slide`}
							key={index}
							src={image.url}
							alt={image.alt}
						/>
					)
				})}

				{/* Slider Indicators */}
				<div>
					{sliderImages.map((dot, index) => {
						return (
							<div key={index} className={`slide-dot`}></div>
						)
					})}
				</div>
			</aside>
		</section>
	)
}