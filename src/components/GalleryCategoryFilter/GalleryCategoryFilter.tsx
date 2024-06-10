import GalleryGrid from '../GalleryGrid/GalleryGrid'
import './GalleryCategoryFilter.scss'
// import { GalleryProps } from './types'
import { ReactElement } from 'react'

import galleryData from '../../data/portfolio_images.json'

{/* 
	
	// foundCategories variable is an array of categories found in the galleryData JSON import data stored as strings. I will need a function to filter the galleryData array and return an array of categories. 

	// useState to manage the category state
	- category state is an array of category strings || ["cat 1", "cat 2", ...].
	- the default state is the  is populated by filtering the galleryData array. 
	- The categories are then rendered as buttons in the aside element.
	
	
	- the first element is the unchanged array of categories
	- the second 
*/}

export function GalleryCategoryFilter(
	// { galleryImages }: GalleryProps
): ReactElement {
	// const [category, setCategory] = useState('All')

	const handleClick = (e: { currentTarget: { innerText: string } }) => {
		alert(`clicked ${e.currentTarget.innerText}`);
	};


	return (
		<section className='gallery-filter'>
			<aside>
				{/* Logic for getting categories from data array & rendering them goes here */}
				<ul className='gallery-filter__list'>
					<li className='gallery-filter__list--item' onClick={handleClick} >All</li>
					<li className='gallery-filter__list--item' onClick={handleClick} >Category 1</li>
					<li className='gallery-filter__list--item' onClick={handleClick} >Category 2</li>
					<li className='gallery-filter__list--item' onClick={handleClick} >Category 3</li>
					<li className='gallery-filter__list--item' onClick={handleClick} >Category 4</li>
					<li className='gallery-filter__list--item' onClick={handleClick} >Category 5</li>
				</ul>
			</aside>

			<GalleryGrid galleryImages={galleryData} />

		</section>
	)
}