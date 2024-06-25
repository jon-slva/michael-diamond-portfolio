import GalleryGrid from '../GalleryGrid/GalleryGrid'
import './GalleryCategoryFilter.scss'
// import { GalleryProps } from './types'
import { ReactElement, useEffect, useState } from 'react'


export default function GalleryCategoryFilter({ galleryData, foundCategories }): ReactElement {
	const [selectedCategory, setSelectedCategory] = useState('All')

	const handleClick = (category: string) => {
		alert(`clicked ${category}`);
		setSelectedCategory(category)
	};

	// useEffect(() => {
	// 	if (selectedCategory === 'All') return
	// }, [selectedCategory])

	return (
		<section className='gallery-filter'>

			<aside>
				<ul className='gallery-filter__list'>
					{
						foundCategories.map((category, index) => {
							return (
								<li className='gallery-filter__list--item' onClick={() => { handleClick(category) }} key={category} >{category}</li>
							)
						})
					}
				</ul>
			</aside>

			<GalleryGrid
				galleryImages={galleryData}
				selectedCategory={selectedCategory}
			/>

		</section>
	)
}