import './Slider.scss'
import { SliderProps } from './types';

export function Slider({ sliderImages }: SliderProps): React.ReactElement {
	return (
		<section className='slider-section'>
			<aside className='slider-container'>
				<img className='slide' src="placehttps://placehold.co/4000x2000/eee/bbb?text=Slide" alt="" />
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
			</aside>

		</section>
	)
}