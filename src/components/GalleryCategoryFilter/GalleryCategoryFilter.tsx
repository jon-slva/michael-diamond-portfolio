import GalleryGrid from '../GalleryGrid/GalleryGrid'
import './GalleryCategoryFilter.scss'
// import { GalleryProps } from './types'
import { ReactElement, useEffect, useState } from 'react'


{/* 
	
	// foundCategories variable is an array of categories found in the galleryData JSON import data stored as strings. I will need a function to filter the galleryData array and return an array of categories. 

	// useState to manage the category state
	- category state is an array of category strings || ["cat 1", "cat 2", ...].
	- the default state is the  is populated by filtering the galleryData array. 
	- The categories are then rendered as buttons in the aside element.
	
	
	- the first element is the unchanged array of categories
	- the second 
*/}


export default function GalleryCategoryFilter({ galleryData, foundCategories }): ReactElement {
	// const [selectedCategory, setSelectedCategory] = useState('All')

	const handleClick = (e: { currentTarget: { innerText: string } }) => {
		alert(`clicked ${e.currentTarget.innerText}`);
	};
	console.log(foundCategories)

	return (
		<section className='gallery-filter'>
			<aside>
				<ul className='gallery-filter__list'>
					{
						foundCategories.map((category, index) => {
							return (
								<li className='gallery-filter__list--item' onClick={handleClick} key={index} >{category}</li>
							)
						})
					}
				</ul>
			</aside>

			<GalleryGrid
				galleryImages={galleryData}
			/>

		</section>
	)
}